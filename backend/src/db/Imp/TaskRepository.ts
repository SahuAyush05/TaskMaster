import { inject, injectable } from "inversify";
import { PrismaClient, TaskMgmt } from "@prisma/client";
import { TYPES } from "../../config/Types";
import { IMediaModel, ITaskInputModel } from "../../models/TaskModel";


@injectable()
class TaskRepository implements TaskRepository{
    constructor(@inject(TYPES.PrismaClient) private prisma: PrismaClient){}
    
    public async addTask(data:ITaskInputModel):Promise<TaskMgmt>{
        return await this.prisma.taskMgmt.create({
            data:data
        })
    }

    public async creatTaskMedia(data:IMediaModel[]):Promise<any>{
        return await this.prisma.mediaMstr.createMany({
            data:data
        })
    }

}

export { TaskRepository };
