import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from "./tasks/tasks.module";
import { DatabaseModule } from "./database.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TasksModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb://localhost/nest',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
  ],
})
export class AppModule { }