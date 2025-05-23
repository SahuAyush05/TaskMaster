import { ITaskModel } from "../models/TaskModel";

export interface ITaskServices {

    createNewTask(data:ITaskModel,files:Express.Multer.File[]):Promise<any>
}