import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TasksArgs } from './dto/tasks.args';

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [{ id: "1", description: "myTask" }];

    findOneById(id: string): Promise<Task> {
        return this.tasks.find(task => task.id === id) as any;
    }

    async findAll(recipesArgs: TasksArgs): Promise<Task[]> {
        return this.tasks as Task[];
    }

}