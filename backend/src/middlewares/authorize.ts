import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../error/ValidationError";
import { JwtTokenUtil } from "common-lib-utils";
import { AppConfig } from "../config/AppConfig";

export const authorize = (roles: string[] = []) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw new ValidationError("No token provided");
      }

      const decoded = JwtTokenUtil.verifyToken(
        token,
        AppConfig.getJwtSecretKey()
      );

      if (!decoded) {
        throw new ValidationError("Invalid token");
      } 

      // Check if role is required and user has required role
      if (roles.length && !roles.includes(decoded.role)) {
        throw new ValidationError("Unauthorized access");
      }

      req.user = decoded;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(401).json({
          success: false,
          message: error.message,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};

// type declaration for Request
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        username: string;
        role: string;
      };
    }
  }
}
