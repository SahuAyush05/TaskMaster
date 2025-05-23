import { inject, injectable } from "inversify";
import { PrismaClient, User } from "@prisma/client";
import { TYPES } from "../../config/Types";


@injectable()
class TaskRepository implements TaskRepository{
    constructor(@inject(TYPES.PrismaClient) private prisma: PrismaClient){}
    

}

export { TaskRepository };
