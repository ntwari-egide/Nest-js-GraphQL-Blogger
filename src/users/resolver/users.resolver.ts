import { Resolver } from "@nestjs/graphql";
import { User } from "../model/user";

// resolver takes the functino that return the Type resolver is going to handler
@Resolver(()=> User)
export class UsersResolver{

}