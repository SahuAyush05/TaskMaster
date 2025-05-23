import dotenv from 'dotenv';
import { Logger } from 'winston';
import { logger } from './LoggerConfig';
import { EncryptionConfig } from 'common-lib-utils';

dotenv.config();

class AppConfig{

    /**
   * Get whitelisted endpoints.
   * @returns Whitelisted endpoints.
   */
  static getWhitelistedEndpoints(): { [method: string]: string[] } {
    return {
      GET: [],
      POST: ["/user/register","/user/login"],
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
   /**
   * Returns the encryption key.
   * @returns { string } - The encryption key.
   */
  static getEncryptionKey(): string {
    if (!process.env.ENCRYPTION_KEY) {
      throw new Error('ENCRYPTION_KEY is not defined in the environment variables');
    }
    return process.env.ENCRYPTION_KEY;
  }

  /**
   * Returns the encryption IV.
   * @returns { number } - The encryption IV.
   */
  static getEncryptionIv(): number {
    if (!process.env.ENCRYPTION_IV) {
      return 16
    }
    return parseInt(process.env.ENCRYPTION_IV);
  }

  /**
   * Returns the encryption algorithm.
   * @returns { string } - The encryption algorithm.
   */
  static getEncryptionAlgorithm(): string {
    if (!process.env.ENCRYPTION_ALGORITHM) {
      return "aes-256-gcm";
    }
    return process.env.ENCRYPTION_ALGORITHM;
  }

  /**
   * Sets the encryption config.
   */
  static setEncryptionConfig(): void {
    logger.info(`Setting encryption key: ${AppConfig.getEncryptionKey()}`);
    logger.info(`Setting encryption iv: ${AppConfig.getEncryptionIv()}`);
    logger.info(`Setting encryption algorithm: ${AppConfig.getEncryptionAlgorithm()}`);
    EncryptionConfig.setEncryptionConfig(AppConfig.getEncryptionKey(), AppConfig.getEncryptionIv(), AppConfig.getEncryptionAlgorithm());
  }

  static getCloudinaryCloudName() {
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      throw new Error('Cloud Name not in env');
    }
    return process.env.CLOUDINARY_CLOUD_NAME!;
  }
  static getCloudinaryApiKey() {
     if (!process.env.CLOUDINARY_API_KEY) {
      throw new Error('Cloudinary API Key not in env');
    }
    return process.env.CLOUDINARY_API_KEY!;
  }
  static getCloudinaryApiSecret() {
     if (!process.env.CLOUDINARY_API_SECRET) {
      throw new Error('API Secret Key not in env');
    }
    return process.env.CLOUDINARY_API_SECRET!;
  }
}

export {AppConfig}