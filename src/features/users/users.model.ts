import {
  BelongsToMany,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript';
import { Project } from '@features/projects/projects.model';
import { UsersProjects } from '@features/userProjectsRelation/users-projects.model';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Unique
  @Column
  email: string;

  @Default(true)
  @Column
  isActive: boolean;

  @BelongsToMany(() => Project, () => UsersProjects)
  projects: Array<Project & { UsersProjects: UsersProjects }>;
}
