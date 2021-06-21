import { Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserInputs {

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: String;

    @Field()
    @IsNotEmpty()
    age: Number;

}