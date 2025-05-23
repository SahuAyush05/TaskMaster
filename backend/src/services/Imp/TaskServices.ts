import { PrismaClient, TaskMgmt } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../../config/Types";
import { ITaskServices } from "../ITaskServices";
import { ITaskRepository } from "../../db/ITaskRepository";
import { IMediaModel, ITaskInputModel, ITaskModel, TaskPriority, TaskStatus } from "../../models/TaskModel";

@injectable()
class TaskServices implements ITaskServices {
    constructor(@inject(TYPES.TaskRepository) private taskRepository: ITaskRepository,
    @inject(TYPES.PrismaClient) private prisma: PrismaClient) { }

    public async createNewTask(data:ITaskModel,files:Express.Multer.File[]):Promise<ITaskModel>{
        try{
            if(!data.title || !data.assignedTo || !data.dueDate){
                throw new Error("Assigned_To | Title | Due Date is required")
            }
            const uploadData:ITaskInputModel={
                title:data.title,
                description:data.description,
                status:data.status,
                priority:data.priority,
                due_date:new Date(data.dueDate),
                assigned_to:data.assignedTo
            }
            const task:TaskMgmt=await this.taskRepository.addTask(uploadData);

            if(!task){
                throw new Error("Error in adding task");
            }

            let mediaURls: string[] = [];

            if(files && files.length > 0){
                mediaURls = files.map((f: any) => f.path);
                await this.createMediaObjectForTask(task.id, mediaURls);
            }
            const createdTask: ITaskModel = {
                id: task.id,
                title: task.title,
                description: task.description ?? "",
                status: task.status as TaskStatus,
                priority: task.priority as TaskPriority,
                dueDate: task.due_date.toISOString(),
                assignedTo: task.assigned_to,
                createdAt: task.created_at,
                mediaURls: mediaURls
            }

            return createdTask;
        }catch(error){
            throw error;
        }
    }

    private async createMediaObjectForTask(entityId:number,urls:string[]):Promise<any>{
        try{
            const data:IMediaModel[]=urls.map((url:string)=>{
                return{
                    entity_id:entityId.toString(),
                    entity_type:"Task",
                    image_url:url
                }
            })
            await this.taskRepository.creatTaskMedia(data);
        }catch(error){
            throw error;
        }
    }
}
export { TaskServices };