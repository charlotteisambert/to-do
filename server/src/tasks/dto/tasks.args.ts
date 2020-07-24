import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CheckTasksArgs {
    @Field()
    id: string;

    @Field()
    checked: Boolean;
}