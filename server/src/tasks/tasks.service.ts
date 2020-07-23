import { Injectable, Inject } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TasksArgs } from './dto/tasks.args';
import { TaskSchema } from './../schemas/task.schema';
import { Model } from 'mongoose';
import { NewTaskInput } from './dto/new-task.input';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASK_MODEL')
        private taskModel: Model<Task>,
    ) { }

    findOneById(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

    async findAll(tasksArgs: TasksArgs): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async create(createTaskDto: NewTaskInput): Promise<Task> {
        const createdCat = new this.taskModel(createTaskDto);
        return createdCat.save();
    }

}