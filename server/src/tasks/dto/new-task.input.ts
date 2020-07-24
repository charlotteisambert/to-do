import { Field, InputType } from '@nestjs/graphql';
import { TaskType } from "./../models/task.model"

@InputType()
export class NewTaskInput {
    @Field()
    description: string;

    @Field()
    type: TaskType;

    @Field()
    checked?: Boolean = false;
}