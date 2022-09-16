import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { MESSAGES } from 'src/app.utils';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { THttpResponse, THttpStatus } from 'src/common/types/Http';
import { Comment } from './entities/comment.entity';
@Injectable()
export class UserService {
  findAll() {
    return [1,2,3];
  }

  public async create(userDto: CreateUserDto): Promise<THttpResponse> {
    delete userDto.password_confirm;

    const isUserExist = await this.findOneByEmail(userDto.email);
    if (!!isUserExist) {
      throw new BadRequestException(MESSAGES.USER_EXIST);
    }

    const user = new User();
    Object.assign(user, { ...userDto });
    await user.save();
    return { status: 'success', statusCode: 201 };
  }

  public async findOneByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }

  public async findOneById(id: number): Promise<User | undefined> {
    return await User.findOne({ where: { id } });
  }

  public async updateUserProfile(userProfileDto: UpdateUserProfileDto): Promise<User> {
    const user = await this.findOneById(userProfileDto.id);

    const updatedUser = Object.assign(user, userProfileDto);
    await updatedUser.save();

    return updatedUser;
  }

  public async setRefreshToken(email: string, token: string) {
    const user = await this.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const salt = await bcrypt.genSalt();
    const hashedToken = await bcrypt.hash(token, salt);

    user.refresh_token = hashedToken;
    await user.save();
  }

  public async createComment(userId: number, comment: string): Promise<THttpResponse> {
    const user = await this.findOneById(userId);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const userComment = new Comment();
    
    userComment.comment = comment;
    userComment.user = user;
    await userComment.save();
    return { status: 'success', statusCode: 201 };
  }
}
