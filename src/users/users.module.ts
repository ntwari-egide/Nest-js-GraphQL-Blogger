import { Module } from '@nestjs/common';
import { UsersResolver } from './resolver/users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService,UsersResolver]
})
export class UsersModule {}
