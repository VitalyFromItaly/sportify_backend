import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { MESSAGES } from 'src/app.utils';
import { JwtService } from '@nestjs/jwt';
import { EExpirationTime } from './auth.constants';
import { TUserCreds } from './auth.domain';
import { TokenDto } from './dtos/Token.dto';
import { ConfigService } from '@nestjs/config';
import { Tokens } from './tokens.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService, private configService: ConfigService) {}

  async getTokens(user: TUserCreds): Promise<TokenDto> {
    const expiresIn = new Date().getTime() + EExpirationTime.TWO_DAYS; 
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync({...user }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn }), // 2 days
      this.jwtService.signAsync({...user }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn: expiresIn + EExpirationTime.ONE_MONTH }) // 32 days
    ]);
    const tokenPayload = { access_token, refresh_token, expires_in: expiresIn, user: await this.userService.findOneByEmail(user.email) };
    const tokens = new Tokens();
    Object.assign(tokens, tokenPayload);
    return await tokens.save();
    // return { access_token, refresh_token, expires_in: expiresIn };
  }

  async updateToken(refreshToken: string, user: User) {
    if (!user) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }

    const { email, password } = user;
    const token = await this.getAccessToken({ email, password });

    return token;
  }

  private async getAccessToken(userInfo: Partial<User>): Promise<TokenDto> {
    const expiresIn = new Date().getTime() + EExpirationTime.TWO_DAYS; 
    const access_token = await this.jwtService.signAsync({...userInfo }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn });
    const tokens = new Tokens();
    tokens.access_token = access_token;
    tokens.expires_in = expiresIn;
    return await tokens.save();
    // return { expires_in: expiresIn, access_token };
  }

  async validateUserCreds(email: string, password: string): Promise<User | undefined> {
    const user = await this.userService.findOneByEmail(email);
    
    if (!user) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
    if (!isPasswordCorrect) {
      throw new UnauthorizedException(MESSAGES.WRONG_PASSWORD);
    }

    return user;
  }
}
