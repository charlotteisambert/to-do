import { Injectable, Inject } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { CheckTasksArgs } from './dto/tasks.args';
import { Model } from 'mongoose';
import { NewTaskInput } from './dto/new-task.input';
import { TASK_MODEL } from "./../constants";

@Injectable()
export class TasksService {
    constructor(
        @Inject(TASK_MODEL)
        private taskModel: Model<Task>,
    ) { }

    findOneById(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async create(createTaskDto: NewTaskInput): Promise<Task> {
        const createdCat = new this.taskModel(createTaskDto);
        return createdCat.save();
    }

    async deleteOne(id: string): Promise<Task> {
        return this.taskModel.findByIdAndRemove(id).exec();
    }

    async update(checkTasksArgs: CheckTasksArgs): Promise<Task> {
        return this.taskModel.findOneAndUpdate(
            { _id: checkTasksArgs.id },
            { checked: checkTasksArgs.checked },
            {new: true}
        ).exec();
    }

}