import { controller, httpPost } from "inversify-express-utils";
import { TYPES } from "../config/Types";
import { inject } from "inversify";
import { IUserServices } from "../services/IUserServices";
import { IRequestModel } from "../models/IRequestModel";
import { Response } from "express";

@controller("/user")
export class UserController {
    constructor(
        @inject(TYPES.UserServices) private userServices: IUserServices,
    ){}

    @httpPost("/register")
    public async registerUser(req: IRequestModel, res: Response): Promise<void> {
        try {
            const user = await this.userServices.createUser(req.body);
            res.status(201).json({
                success:true,
                message:"User registered Successfully",
                data:user
            });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    @httpPost("/login")
    public async loginUser(req: IRequestModel, res: Response): Promise<void>{
        try {
            const token = await this.userServices.login(req.body);
             res.status(201).json({
                success:true,
                message:"User logged in Successfully",
                token:token
            });
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}
