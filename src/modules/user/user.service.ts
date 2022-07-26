import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  findAll() {
    return [1,2,3];
  }

  public async create(userDto: CreateUserDto): Promise<User> {
    delete userDto.password_confirm;

    const user = new User();
    Object.assign(user, { ...userDto});
    return await user.save();
  }

  public async findOneByEmail(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email } });
  }

}
