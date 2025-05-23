import { Request } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

export const TYPES = {
    //Controllers
    UserController: Symbol.for("UserController"),
    TaskController: Symbol.for("Taskcontroller"),

    //Services
    UserServices: Symbol.for("UserServices"),
    TaskServices: Symbol.for("TaskServices"),

    //Repositories
    DatabaseConfig: Symbol.for("DatabaseConfig"),
    Database: Symbol.for("Database"),
    UserRepository: Symbol.for("UserRepository"),
    TaskRepository: Symbol.for("TaskRepository"),

    //utils
    PrismaClient: Symbol("PrismaClient"),
  };
  