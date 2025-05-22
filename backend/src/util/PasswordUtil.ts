import { ValidationError } from "../error/ValidationError";
import * as bcrypt from "bcrypt";

// utils/password-validator.ts
class PasswordUtil {

  public static validatePassword(password: string): void {
    if (password.length < 8) {
      throw new ValidationError("Password must be at least 8 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      throw new ValidationError("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      throw new ValidationError("Password must contain at least one lowercase letter.");
    }

    if (!/\d/.test(password)) {
      throw new ValidationError("Password must contain at least one digit.");
    }

    if (!/[^a-zA-Z0-9]/.test(password)) {
      throw new ValidationError("Password must contain at least one special character.");
    }
  }

  public static async encryptPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  } 

  public static async comparePassword(userEnteredPassword: string, storedPassword: string): Promise<Boolean> {
    return await bcrypt.compare(userEnteredPassword, storedPassword);
  }

  public static async decryptPassword(password: string): Promise<string> {
    // Implement password decryption
    return bcrypt.hashSync(password, 10);
  }
  
}

export { PasswordUtil }