import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/inputs/create-user.inputs';
import { User } from './model/user';
import { v4 as uuidv4 } from 'uuid'
import { UpdateUserInputs } from './dto/inputs/update-user.inputs';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { DeleteUserInputs } from './dto/inputs/delete-user.inputs';

@Injectable()
export class UsersService {

    private users: User[] = []


    public createUser(createUserData: CreateUserInputs): User{

        const user : User = {
            userId: uuidv4(),
            isSubscribed: false,
            ...createUserData
        }

        this.users.push(user)

        return user
    }

    public getUser(getUserArg : GetUserArgs): User{
        
        const user = this.users.find(user => user.userId === getUserArg.userId )

        return user

    }

    public getUsers(getUsersArg: GetUsersArgs): User[]{

        return getUsersArg.userIds.map(userId => this.getUser({userId}))
    }

    public getAllUsers(): User[]{

        return this.users
    }
    
    public updateUser(updateUserData: UpdateUserInputs): User{
        const user = this.users.find(user => user.userId === updateUserData.userId)

        Object.assign(user,updateUserData)
        
        return user
    }

    public deleleUser(deleleteUserData: DeleteUserInputs): User{

        const userIndex = this.users.findIndex(user => user.userId === deleleteUserData.userId )

        const user = this.users[userIndex]

        this.users.slice(userIndex)

        return user
    }

}
