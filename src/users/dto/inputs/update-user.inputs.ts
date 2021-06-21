import { Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

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