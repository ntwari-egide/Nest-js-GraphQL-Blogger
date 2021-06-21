import { Query, Resolver } from "@nestjs/graphql";
import { User } from "../model/user";
import { UsersService } from "../users.service";

// resolver takes the functino that return the Type resolver is going to handler
@Resolver(()=> User)
export class UsersResolver{

    // resolver must return the data from the services like controllers do

    constructor(private readonly usersService: UsersService){}


    @Query(()=> User, { name: 'user', nullable: true })
    getUser(): User{
        return this.usersService.getUser()
    }

}

function nullable(arg0: () => typeof User, name: void, arg2: string, nullable: any, arg4: boolean) {
    throw new Error("Function not implemented.");
}
