import { controller, httpPost } from "inversify-express-utils";
import { TYPES } from "../config/Types";
import { inject } from "inversify";
import { ITaskServices } from "../services/ITaskServices";
import { IRequestModel } from "../models/IRequestModel";
import { upload } from "../config/MulterConfig";
import { Response } from "express";

@controller("/task")
export class TaskController {
    constructor(
        @inject(TYPES.TaskServices) private taskServices: ITaskServices,
    ){}

   @httpPost('/add', upload.array('images',3))
   public async addTask(req:IRequestModel,res:Response):Promise<void>{
    try{
        const files = req.files as Express.Multer.File[];
        console.log(files)
        const data=req.body;

        const task=await this.taskServices.createNewTask(data,files);

        res.status(200).json({
            success:true,
            message:"Task Created Successfully",
            data:task
        })
    }catch(error){
        res.status(500).json({ error: (error as Error).message });
    }
   }
}
