import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

  findAll() {
    return [1,2,3];
  }

  public async create(userDto: CreateUserDto): Promise<User> {
    delete userDto.password_confirm;
    // const { password, ...params } = userDto;
    // const hashedPassword = await this.getHashedPassword(password);

    const user = new User();
    Object.assign(user, { ...userDto});

    return await user.save();
  }

  // private async getHashedPassword(plainPassword: string): Promise<string> {
  //   const salt = await bcrypt.genSalt();
  //   return await bcrypt.hash(plainPassword, salt);
  // }
}
