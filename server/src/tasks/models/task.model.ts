import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
    @Field(type => ID)
    id: string;
    @Field({ nullable: true })
    description?: string;
}