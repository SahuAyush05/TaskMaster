import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/Types";
import { ITaskServices } from "../ITaskServices";
import { ITaskRepository } from "../../db/ITaskRepository";

@injectable()
class TaskServices implements ITaskServices {
    constructor(@inject(TYPES.TaskRepository) private taskRepository: ITaskRepository,
    @inject(TYPES.PrismaClient) private prisma: PrismaClient) {
        
    }

    
}
export { TaskServices };