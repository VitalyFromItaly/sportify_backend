import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { SETTINGS } from 'src/app.utils';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly usersService: UserService) {}

  @Get('/')
  async readAll() {
    return await this.usersService.findAll();
  }

  @Post('/create')
  @HttpCode(200)
  @UseInterceptors(ClassSerializerInterceptor) // allows not to return @Exclude() fields in entity
  async create(@Body(SETTINGS.VALIDATION_PIPE) user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }
}
 