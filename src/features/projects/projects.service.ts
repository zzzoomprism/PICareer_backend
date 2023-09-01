import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Project } from './projects.model';
import { FindByIdArguments } from './models/findByIdModel';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project) private projectModel: typeof Project) {}

  findAll(): Promise<Project[]> {
    return this.projectModel.findAll({ include: [User] });
  }

  findById({ id }: FindByIdArguments): Promise<Project | null> {
    return this.projectModel.findOne({ where: { id } });
  }

  create(projectDto: CreateProjectDto): Promise<Project> {
    return this.projectModel.create({
      name: projectDto.name
    });
  }
}
