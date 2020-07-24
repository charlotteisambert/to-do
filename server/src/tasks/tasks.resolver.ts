import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';
import { CheckTasksArgs } from './dto/tasks.args';
import { NewTaskInput } from './dto/new-task.input';

@Resolver(of => Task)
export class TasksResolver {
    constructor(
        private tasksService: TasksService,
    ) { }

    @Query(returns => [Task])
    tasks(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Query(returns => Task)
    async task(@Args('id') id: string): Promise<Task> {
        const recipe = await this.tasksService.findOneById(id);
        if (!recipe) {
            throw new NotFoundException(id);
        }
        return recipe;
    }

    @Mutation(returns => Task)
    async addTask(
        @Args('newTaskData') newTaskData: NewTaskInput,
    ): Promise<Task> {
        const task = await this.tasksService.create(newTaskData);
        return task;
    }

    @Mutation(returns => Task)
    async deleteTask(@Args('id') id: string): Promise<Task> {
        const task = await this.tasksService.deleteOne(id);
        return task;
    }
    
    @Mutation(returns => Task)
    async checkTask(@Args() checkTasksArgs: CheckTasksArgs): Promise<Task> {
        const task = await this.tasksService.update(checkTasksArgs);
        return task;
    }

}