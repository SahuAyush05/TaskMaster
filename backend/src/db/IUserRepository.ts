import { User } from "@prisma/client";
import { IUserRequestModel } from "../models/UserModel";

export interface IUserRepository {
    createUser(data:IUserRequestModel):Promise<User>;
    
    findUserByEmail(email:string):Promise<User|null>
}