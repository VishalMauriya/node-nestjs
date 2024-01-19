
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
// import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    return user
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}