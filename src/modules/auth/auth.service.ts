import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { MESSAGES } from 'src/app.utils';
import { JwtService } from '@nestjs/jwt';
import { EExpirationTime } from './auth.constants';
import { TUserCreds } from './auth.domain';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  getToken(user: TUserCreds) {
    return { 
      access_token: this.jwtService.sign({ ...user }),
      expires_in: new Date().getTime() + EExpirationTime.TWO_DAYS
    };
  }

  async validateUserCreds(email: string, password: string): Promise<User | undefined> {
    const user = await this.userService.findOneByEmail(email);
    
    if (!user) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password, );
    
    if (!isPasswordCorrect) {
      throw new UnauthorizedException(MESSAGES.WRONG_PASSWORD);
    }

    return user;
  }
}
