import { controller, httpPost } from "inversify-express-utils";
import { TYPES } from "../config/Types";
import { inject } from "inversify";
import { ITaskServices } from "../services/ITaskServices";

@controller("/task")
export class TaskController {
    constructor(
        @inject(TYPES.TaskServices) private userServices: ITaskServices,
    ){}

   
}
