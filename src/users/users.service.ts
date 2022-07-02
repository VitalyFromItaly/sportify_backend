import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'ivan',
      email: 'ivan@mail.com',
      password: 'password'
    },
    {
      id: 2,
      name: 'second',
      email: 'second@mail.com',
      password: 'password'
    },
  ]
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(name: string) {
    return this.users.find(user => user.name === name);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
