import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/Types";
import { IUserServices } from "../IUserServices";
import { IUserRepository } from "../../db/IUserRepository";
import { IUserModel, LoginRequestModel, Role } from "../../models/UserModel";
import { EncryptionUtil, JwtTokenUtil } from "common-lib-utils";
import { PasswordUtil } from "../../util/PasswordUtil";
import { ValidationError } from "../../error/ValidationError";
import { AppConfig } from "../../config/AppConfig";

@injectable()
class UserServices implements IUserServices {
    constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository,
    @inject(TYPES.PrismaClient) private prisma: PrismaClient) {
        
    }

    // Implement IUserServices methods here

    public async createUser(data: IUserModel): Promise<IUserModel> {
      try {
        const password = data.password;
        if(!data.email || !data.password) {
            throw new Error("Email and password are required");
        }
        PasswordUtil.validatePassword(password!);

        // fetch existing user with email
        const existingUser =await this.userRepository.findUserByEmail(data.email);

        if(existingUser){
            throw new Error("User Already Exist");
        }
        const encryptedPassword: string = await EncryptionUtil.encrypt(password!);
        const registrationData={
            email: data.email,
            password: encryptedPassword,
            name: data.name,
            role: data.role,
        }
        const user = await this.userRepository.createUser(registrationData);
        return {
            id: user.id,
            email: user.email??"",
            name: user.name??"",
            role: user.role as Role
        };
      }catch (error) {
            throw new Error(`Error creating user: ${(error as Error).message}`); 
     }
    }

    /**
   * Login user.
   * @param credentials {LoginRequestModel} - Login credentials.
   * @returns {Promise<{ token: string }>} - Token.
   */
  public async login(credentials: LoginRequestModel): Promise<{ token: string }> {
    // Find user by username.
    const user = await this.userRepository.findUserByEmail(credentials.email);
    if (!user) {
      throw new ValidationError("Username or Password is incorrect.");
    }
    if (!user.password) {
      throw new ValidationError("Username or Password is incorrect.");
    }
    const decryptedPassword = await EncryptionUtil.decrypt(user.password);
    if (decryptedPassword !== credentials.password) {
      throw new ValidationError("Username or Password is incorrect.");
    }
    const tokenData = { id: user.id, username: user.email, role: user.role };
    const token = JwtTokenUtil.generateToken(tokenData, AppConfig.getJwtSecretKey(), AppConfig.getJwtExpiry());

    return { token };
  }
}
export { UserServices };