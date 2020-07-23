import { Connection } from 'mongoose';
import { TaskSchema } from './../schemas/task.schema';
import { TASK_MODEL, DATABASE_CONNECTION, TASK_MODEL_NAME } from "./../constants";

export const tasksProviders = [
    {
        provide: TASK_MODEL,
        useFactory: (connection: Connection) => connection.model(TASK_MODEL_NAME, TaskSchema),
        inject: [DATABASE_CONNECTION],
    },
];