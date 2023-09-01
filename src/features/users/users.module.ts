import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from '@features/users/users.controller';
import { UsersProjects } from '@features/userProjectsRelation/users-projects.model';
import { UsersService } from './users.service';
import { User } from './users.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UsersProjects])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
