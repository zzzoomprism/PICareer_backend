import { Project } from 'src/features/projects/projects.model';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  isActive?: boolean;
  projects: Project[];
}
