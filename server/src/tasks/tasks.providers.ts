import { Connection } from 'mongoose';
import { TaskSchema } from './../schemas/task.schema';
import { TASK_MODEL, DATABASE_CONNECTION } from "./../constants";

export const tasksProviders = [
    {
        provide: TASK_MODEL,
        useFactory: (connection: Connection) => connection.model('Task', TaskSchema),
        inject: [DATABASE_CONNECTION],
    },
];