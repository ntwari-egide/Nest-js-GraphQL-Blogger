import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInputs {

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: String;

    @Field()
    @IsNotEmpty()
    age: Number;

}