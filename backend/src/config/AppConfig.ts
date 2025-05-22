import dotenv from 'dotenv';
import { Logger } from 'winston';

dotenv.config();

class AppConfig{

    /**
   * Get whitelisted endpoints.
   * @returns Whitelisted endpoints.
   */
  static getWhitelistedEndpoints(): { [method: string]: string[] } {
    return {
      GET: [],
      POST: [],
      PUT: [],
      DELETE: [],
    };
  }

    /**
     * Returns the secret key of the JWT.
     * @returns { string } - The secret key of the JWT.
     */
    static getJwtSecretKey(): string {
        if (!process.env.JWT_SECRET_KEY) {
        throw new Error(
            "JWT_SECRET_KEY is not defined in the environment variables"
        );
        }
        return process.env.JWT_SECRET_KEY;
    }

    /**
     * Returns the expiry of the JWT.
     * @returns { string } - The expiry of the JWT.
     */
    static getJwtExpiry(): string {
        if (!process.env.JWT_EXPIRY) {
        throw new Error("JWT_EXPIRY is not defined in the environment variables");
        }
        return process.env.JWT_EXPIRY;
    }

    /**
   * Returns the cors origins.
   * @returns { string[] } - The cors origins.
   */
  static getCorsOrigins(): string[] {
    let corsOrigins: string[] = [];
    if (process.env.CORS_ORIGIN_LOCAL_1) {
        corsOrigins.push(process.env.CORS_ORIGIN_LOCAL_1);
      }
      if (process.env.CORS_ORIGIN_LOCAL_2) {
        corsOrigins.push(process.env.CORS_ORIGIN_LOCAL_2);
      }
      return corsOrigins;
  }
}

export {AppConfig}