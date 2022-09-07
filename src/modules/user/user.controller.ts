import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Param, Post, Put, UseInterceptors, Request } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { THttpResponse } from 'src/common/types/Http';
import { Public } from '../auth/auth.decorators';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { ResponseCreateUser } from './dtos/ResponseCreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'fetchUserById' })
  @ApiCreatedResponse({ description: 'create user', type: User })
  async read(@Param('id') id: string): Promise<User | undefined> {
    return await this.usersService.findOneBy(+id);
  }

  @Post('/cre ate')
  @Public()
  @ApiCreatedResponse({ description: 'create user', type: ResponseCreateUser })
  @ApiBadRequestResponse({ description: 'user can not register' })
  @ApiOperation({ operationId: 'create' })
  @HttpCode(201)
  @UseInterceptors(ClassSerializerInterceptor) // allows not to return @Exclude() fields in entity
  async create(@Body(SETTINGS.VALIDATION_PIPE) user: CreateUserDto): Promise<THttpResponse> {
    return await this.usersService.create(user);
  }

  @Put('/update-profile')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'updateUserProfile' })
  @HttpCode(200)
  async updateUserInfo(@Body(SETTINGS.VALIDATION_PIPE) userProfile: UpdateUserProfileDto): Promise<User> {
    return await this.usersService.updateUserProfile(userProfile);
  }

  @Get('')
  @ApiOperation({ operationId: 'get' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'get user info by token', type: User })
  // @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  getUser(@Request() req: any): User {
    return req.user;
  } 
  // async getUser(@Request() req: any): Promise<{ user: User }> {
  //   return { user: req.user };
  // } 
}