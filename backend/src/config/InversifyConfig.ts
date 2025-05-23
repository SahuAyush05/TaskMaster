import { PrismaClient, User } from "@prisma/client";
import { Container } from "inversify";
import { TYPES } from "./Types";
import { UserController } from "../controllers/UserController";
import { UserRepository } from "../db/Imp/UserRepository";
import { IUserRepository } from "../db/IUserRepository";
import { UserServices } from "../services/Imp/UserServices";
import { IUserServices } from "../services/IUserServices";
import { DatabaseConfig } from "./DatabaseConfig";
import { TaskController } from "../controllers/TaskController";
import { ITaskServices } from "../services/ITaskServices";
import { TaskServices } from "../services/Imp/TaskServices";
import { ITaskRepository } from "../db/ITaskRepository";
import { TaskRepository } from "../db/Imp/TaskRepository";

const container= new Container();

container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(new PrismaClient());

//controllers
container.bind<UserController>(TYPES.UserController).to(UserController);
container.bind<TaskController>(TYPES.TaskController).to(TaskController);

//services
container.bind<IUserServices>(TYPES.UserServices).to(UserServices);
container.bind<ITaskServices>(TYPES.TaskServices).to(TaskServices);

//Repositories
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<ITaskRepository>(TYPES.TaskRepository).to(TaskRepository);
container.bind<DatabaseConfig>(DatabaseConfig).to(DatabaseConfig).inSingletonScope();

export { container };