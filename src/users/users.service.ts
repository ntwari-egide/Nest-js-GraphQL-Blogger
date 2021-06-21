import { Injectable } from '@nestjs/common';
import { User } from './model/user';

@Injectable()
export class UsersService {

    private users: User[] = []


    public createUser(): User{
        return 
    }

    public getUser(): User{
        return 
    }

}
