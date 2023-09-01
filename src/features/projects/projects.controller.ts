import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './projects.model';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @Get('retrieve')
  async getAllProjects(): Promise<Project[] | undefined> {
    try {
      const result = this.projectService.findAll();
      return result;
    } catch (error) {}
  }

  @Get('retrieve/:id')
  async getProject(@Param('id') projectId: string): Promise<Project | null> {
    return this.projectService.findById({ id: projectId });
  }

  @Post('create')
  async createProject(@Body() projectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(projectDto);
  }
}
