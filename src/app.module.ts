import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectsModule } from './features/projects/projects.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './features/users/users.model';
import { UsersModule } from './features/users/users.module';
import { Project } from './features/projects/projects.model';
import { UsersProjects } from './features/userProjectsRelation/users-projects.model';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mifortroot',
      password: 'Mifort@123',
      database: 'mifortdb',
      models: [User, Project, UsersProjects],
      autoLoadModels: false,
      synchronize: false
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
