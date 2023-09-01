import { Body, Controller, Get, UseFilters, Param, Post, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/exceptions/HttpExceptionFilter';
import { DBException } from 'src/exceptions/DBException';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('retrieve')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('retrieve/:email')
  findUser(@Param('email') email: string): Promise<User | null> {
    return this.userService.findUser({ email });
  }

  @Post('create')
  @UseFilters(HttpExceptionFilter)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User | undefined> {
    try {
      const result = await this.userService.createUser(createUserDto);

      return result;
    } catch (error) {
      throw new DBException(error?.message, HttpStatus.BAD_REQUEST, error);
    }
  }
}
