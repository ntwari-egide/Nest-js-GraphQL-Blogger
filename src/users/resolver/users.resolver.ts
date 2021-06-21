import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetUserArgs } from "../dto/args/get-user.args";
import { GetUsersArgs } from "../dto/args/get-users.args";
import { CreateUserInputs } from "../dto/inputs/create-user.inputs";
import { User } from "../model/user";
import { UsersService } from "../users.service";

// resolver takes the functino that return the Type resolver is going to handler
@Resolver(()=> User)
export class UsersResolver{

    // resolver must return the data from the services like controllers do

    constructor(private readonly usersService: UsersService){}


    @Query(()=> User, { name: 'user', nullable: true })
    getUser(@Args() getUserArgs: GetUserArgs): User{

        return this.usersService.getUser()

    }


    /**
     * Nullable items means that we are accepting know items only not lists
     */
    @Query(()=> [User] , { name: 'users', nullable: 'items'})
    getUsers(@Args() getUsersArgs : GetUsersArgs): [User]{

        return this.usersService.getUsers()
    }

    @Mutation(()=> User)
    createUser(@Args('createUserData') createUserData : CreateUserInputs): User{
        return this.usersService.createUser()
    }
    

    @Mutation(()=> User)
    updateUser(): User{
        return this.usersService.updateUser()
    }

}
