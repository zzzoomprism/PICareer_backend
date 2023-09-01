import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Project } from '../projects/projects.model';

@Table
export class UsersProjects extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Project)
  @Column
  projectId: number;
}
