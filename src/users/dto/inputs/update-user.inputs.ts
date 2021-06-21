import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInputs {

    @Field()
    @IsNotEmpty()
    userId: String;

    @Field()
    @IsOptional()
    age: Number;

    @Field()
    isSubscribed: boolean;
}