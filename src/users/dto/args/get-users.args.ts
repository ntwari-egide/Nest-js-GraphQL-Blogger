import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, isNotEmpty } from "class-validator";

@ArgsType()
export class GetUsersArgs {
    @Field(() => [String])
    @IsArray()
    userIds: String[];
}