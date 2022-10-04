import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Param, Post, Put, UseInterceptors, Request } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from 'src/app.utils';
import { CreateResponse } from 'src/common/dtos/CreateResponse.dto';
import { THttpResponse } from 'src/common/types/Http';
import { Public } from '../auth/auth.decorators';
import { CommentDto } from './dtos/Comment.dto';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'fetchUserById' })
  @ApiCreatedResponse({ description: 'create user', type: User })
  @ApiCreatedResponse({ type: User })
  async read(@Param('id') id: string): Promise<User | undefined> {
    return await this.usersService.findOneById(+id);
  }

  @Post('/create')
  @Public()
  @ApiCreatedResponse({ description: 'create user', type: CreateResponse })
  @ApiBadRequestResponse({ description: 'user can not register' })
  @ApiOperation({ operationId: 'create' })
  @ApiCreatedResponse({ type: CreateResponse })
  @HttpCode(201)
  @UseInterceptors(ClassSerializerInterceptor) // allows not to return @Exclude() fields in entity
  async create(@Body(SETTINGS.VALIDATION_PIPE) user: CreateUserDto): Promise<THttpResponse> {
    console.log({ user });
    return await this.usersService.create(user);
  }

  @Put('/update-profile')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'update' })
  @ApiDefaultResponse({ description: 'returns updated user info', type: User })
  @ApiCreatedResponse({ type: User })
  @HttpCode(200)
  async update(@Body(SETTINGS.VALIDATION_PIPE) userProfile: UpdateUserProfileDto): Promise<User> {
    return await this.usersService.updateUserProfile(userProfile);
  }

  @Get('')
  @ApiOperation({ operationId: 'read' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'get user info by token', type: User })
  @ApiCreatedResponse({ type: User })
  // @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getUser(@Request() req: any): Promise<User> {
    return req.user;
  }

  @Post('/leave-comment')
    @ApiOperation({ operationId: 'leaveComment' })
    @ApiBearerAuth()
    @ApiDefaultResponse({ description: 'user suggestion/comment', type: CreateResponse })
    @ApiCreatedResponse({ type: CreateResponse })
    @HttpCode(201)
  async leaveComment(@Request() req: any, @Body(SETTINGS.VALIDATION_PIPE) comment: CommentDto): Promise<THttpResponse> {
    return await this.usersService.createComment(req.user.id, comment.comment);
  }
}