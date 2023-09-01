import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { UsersProjects } from '../userProjectsRelation/users-projects.model';

@Table
export class Project extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @BelongsToMany(() => User, () => UsersProjects)
  users: Array<User & { UsersProjects: UsersProjects }>;
}
