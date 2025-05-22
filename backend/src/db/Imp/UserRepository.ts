import { inject, injectable } from "inversify";
import { IUserRepository } from "../IUserRepository";
import { PrismaClient, User } from "@prisma/client";
import { TYPES } from "../../config/Types";
import { IUserRequestModel } from "../../models/UserModel";


@injectable()
class UserRepository implements IUserRepository{
    constructor(@inject(TYPES.PrismaClient) private prisma: PrismaClient){}

    public async createUser(data:IUserRequestModel):Promise<User>{
        try {
            const user = await this.prisma.user.create({
                data:data
            })
            return user;
        }catch(error){
            throw new Error(`Error creating user: ${(error as Error).message}`);
        }
    }

    public async findUserByEmail(email:string):Promise<User|null>{
        return await this.prisma.user.findFirst({
            where:{
                email:email
            }
        })
    }

    

}

export { UserRepository };
