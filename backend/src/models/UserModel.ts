export enum Role{
    Admin="Admin",
    User="User"
}

export interface IUserRequestModel {
    name: string;
    email: string;
    password: string;
    role?: Role;
}

export interface IUserModel {
    id?: string;
    name: string;
    email: string;
    password?: string; 
    role?: Role;
}

export interface LoginRequestModel{
    email:string;
    password:string;
}