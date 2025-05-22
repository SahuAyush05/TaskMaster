import { Response, NextFunction, RequestHandler } from "express";
import { AuthRequest } from "../config/Types";
import { AppConfig } from "../config/AppConfig";
import { JwtTokenUtil } from "common-lib-utils";
import { logger } from "../config/LoggerConfig";

/**
 * Checks if an endpoint is whitelisted.
 * 
 * @param {string} method - HTTP method (e.g., GET, POST, PUT, DELETE)
 * @param {string} normalizedPath - Request path without prefix (/business-service)
 * @returns {boolean} True if endpoint is whitelisted, false otherwise
 */
const isWhitelistedEndpoint = (method: string, normalizedPath: string): boolean => {
    const whitelistedEndpoints = AppConfig.getWhitelistedEndpoints()[method];

    return whitelistedEndpoints?.some((pattern) => {
        const pathParams = pattern.match(/:[^/]+/g);
        const basePath = pattern.replace(/:[^/]+/g, '.*');

        const regexp = new RegExp(`^${basePath}$`);
        return regexp.test(normalizedPath);
    }) || false;
};

/**
 * Authentication utility middleware.
 * 
 * @param {AuthRequest} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 */
export const AuthUtil: RequestHandler = (req: AuthRequest, res: Response, next: NextFunction) => {
  const normalizedPath = req.path.replace(/^\/taskmaster/, '');
  const method = req.method;

  logger.info(`Whitelisted Endpoints for ${method}: ${AppConfig.getWhitelistedEndpoints()[method]}`);
  logger.info(`Request Path: ${req.path}`);
  logger.info(`Normalized Path: ${normalizedPath}`);

  if (isWhitelistedEndpoint(method, normalizedPath)) {
    logger.info("Skipping authentication check. Endpoint is whitelisted.");
    return next();
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(403).json({ message: 'Authorization required for this operation.' });
    return;
  }

  try {
    const decoded = JwtTokenUtil.verifyToken(token, AppConfig.getJwtSecretKey());
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    logger.error(`Error occurred while decoding JWT token: ${error}`);
    res.status(401).json({ message: 'Unauthorized' });
  }
};