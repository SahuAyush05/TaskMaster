import { IUserModel, LoginRequestModel } from "../models/UserModel";

export interface IUserServices {
    createUser(data: IUserModel): Promise<IUserModel>;
    
    login(credentials: LoginRequestModel): Promise<{ token: string }>;
}