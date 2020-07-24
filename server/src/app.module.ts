import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from "./tasks/tasks.module";
import { DatabaseModule } from "./database/database.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { URL } from "./constants";

@Module({
  imports: [
    TasksModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        URL,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
  ],
})

export class AppModule { }