import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from '@features/projects/projects.model';
import { UsersProjects } from '@features/userProjectsRelation/users-projects.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFindByIdArguments } from './models/types';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(UsersProjects)
    private usersProjects: typeof UsersProjects
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: [Project] });
  }

  async findUser({ email }: UserFindByIdArguments): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        email
      },
      include: [Project]
    });
  }

  async createUser(userDto: CreateUserDto): Promise<User | undefined> {
    const result = await this.userModel.create({
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      isActive: userDto.isActive || true,
      email: userDto.email,
      position: userDto.position
    });

    if (userDto?.projects?.length) {
      const usersProjectsData = userDto?.projects?.map(el => ({
        userId: result?.id,
        projectId: el
      }));

      await this.usersProjects.bulkCreate(usersProjectsData);
    }

    return result;
  }
}
