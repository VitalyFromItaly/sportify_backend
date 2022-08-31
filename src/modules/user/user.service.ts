import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'src/app.utils';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserProfileDto } from './dtos/UpdateUserProfile.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  findAll() {
    return [1,2,3];
  }

  public async create(userDto: CreateUserDto): Promise<User> {
    delete userDto.password_confirm;

    const isUserExist = await this.findOneByEmail(userDto.email);
    if (!!isUserExist) {
      throw new BadRequestException(MESSAGES.USER_EXIST);
    }

    const user = new User();
    Object.assign(user, { ...userDto });
    return await user.save();
  }

  public async findOneByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }

  public async findOneBy(id: number): Promise<User | undefined> {
    return await User.findOneBy({ id });
  }

  public async updateUserProfile(userProfileDto: UpdateUserProfileDto): Promise<User> {
    const user = await this.findOneBy(userProfileDto.id);

    const updatedUser = Object.assign(user, userProfileDto);
    return await updatedUser.save();
  }

}
