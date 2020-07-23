import { Document } from 'mongoose';

export interface Task extends Document {
    readonly id: string;
    readonly description: string;
}