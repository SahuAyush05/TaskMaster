import { Request } from "express";

export interface IRequestModel extends Request {
    user?: any; 
    files? : any; 
}