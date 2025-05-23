export enum TaskStatus{
    Completed="Completed",
    Not_Started="Not_Started",
    In_Progress="In_Progress"
}

export enum TaskPriority{
    Low="Low",
    Medium="Medium",
    High="High"
}

export interface ITaskModel{
    id?:number,
    title:string,
    description:string,
    status:TaskStatus,
    priority:TaskPriority,
    dueDate:string,
    assignedTo:string
    createdAt?:Date,
    mediaURls?:string[]
}

export interface ITaskInputModel{
    title:string,
    description:string,
    status:TaskStatus,
    priority:TaskPriority,
    due_date:Date,
    assigned_to:string
}

export interface IMediaModel{
    entity_type:string,
    entity_id:string,
    image_url:string
}