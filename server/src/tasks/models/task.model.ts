import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TaskType {
    TEXT = "TEXT",
    NUMBER = "NUMBER",
    TEXT_MULTILINE = "TEXT_MULTILINE",
}

registerEnumType(TaskType, {
    name: 'TaskType',
});

@ObjectType()
export class Task {
    @Field(type => ID)
    id: string;

    @Field()
    description: string;

    @Field(type => TaskType)
    type: TaskType;

    @Field()
    checked: Boolean;
}