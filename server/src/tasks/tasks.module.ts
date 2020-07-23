import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';
import { tasksProviders } from './tasks.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [TasksService, TasksResolver, ...tasksProviders],
})
export class TasksModule { }