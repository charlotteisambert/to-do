import { Document } from 'mongoose';
import { TaskType } from "./../models/task.model";

export interface Task extends Document {
    readonly id: string;
    readonly description: string;
    readonly type: TaskType;
}