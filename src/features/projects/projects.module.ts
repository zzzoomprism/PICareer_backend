import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Project } from './projects.model';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
