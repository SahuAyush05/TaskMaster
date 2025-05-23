import { TaskMgmt } from "@prisma/client";
import { IMediaModel, ITaskInputModel } from "../models/TaskModel";

export interface ITaskRepository{

    addTask(data:ITaskInputModel):Promise<TaskMgmt>;

    creatTaskMedia(data:IMediaModel[]):Promise<any>;
}