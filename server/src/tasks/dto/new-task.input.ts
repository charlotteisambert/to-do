import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewTaskInput {
    @Field()
    description?: string;
}