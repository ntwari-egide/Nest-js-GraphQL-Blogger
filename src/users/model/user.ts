import { Field, Int, ObjectType } from "@nestjs/graphql"
import { IsOptional } from "class-validator"

@ObjectType()
export class User {
    @Field()
    userId: String

    @Field()
    email: String

    @Field(()=> Int)
    age: Number

    @Field({ nullable: true })
    @IsOptional()
    isSubscribed: boolean
}