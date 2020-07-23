import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';
import { TasksArgs } from './dto/tasks.args';

@Resolver(of => Task)
export class TasksResolver {
    constructor(
        private tasksService: TasksService,
    ) { }

    @Query(returns => [Task])
    tasks(@Args() tasksArgs: TasksArgs): Promise<Task[]> {
      return this.tasksService.findAll(tasksArgs);
    }

    @Query(returns => Task)
    async task(@Args('id') id: string): Promise<Task> {
        const recipe = await this.tasksService.findOneById(id);
        if (!recipe) {
            throw new NotFoundException(id);
        }
        return recipe;
    }
}