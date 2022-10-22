import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { MESSAGES } from '~/app.utils';
import { JwtService } from '@nestjs/jwt';
import { EExpirationTime } from './auth.constants';
import { TUserCreds } from './auth.types';
import { TokenDto } from './dtos/Token.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService, private configService: ConfigService) {}

  async getTokens(userInfo: TUserCreds, refreshToken?: string): Promise<TokenDto> {
    const user = await this.userService.findOneByEmail(userInfo.email);
    if (!user) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }

    if (refreshToken) {
      const isRefreshTokenMatched = bcrypt.compare(user.refresh_token, refreshToken);
      if (!isRefreshTokenMatched) {
        throw new UnauthorizedException(MESSAGES.INVALID_TOKEN);
      }
    }

    const accessTokenExpiresIn = new Date().getTime() + EExpirationTime.TWO_DAYS;
    const refreshTokenExpiresIn = new Date().getTime() + EExpirationTime.ONE_MONTH;
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync({...userInfo }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn: accessTokenExpiresIn }), // 2 days
      this.jwtService.signAsync({...userInfo }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn: refreshTokenExpiresIn }) // 30 days
    ]);

    return { access_token, refresh_token, refresh_token_expires_in: refreshTokenExpiresIn, access_token_expires_in: accessTokenExpiresIn };
  }

  async refreshAccessToken(refreshToken: string, userCreds: User) {
    if (!userCreds) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }
    const user = await this.userService.findOneByEmail(userCreds.email);

    if (!user) {
      throw new BadRequestException(MESSAGES.USER_NOT_FOUND);
    }
    const isRefreshTokenMatched = bcrypt.compare(user.refresh_token, refreshToken);

    if (!isRefreshTokenMatched) {
      throw new UnauthorizedException(MESSAGES.INVALID_TOKEN);
    }

    const { email, password } = user;
    const token = await this.getAccessToken({ email, password });

    return token;
  }

  private async getAccessToken(userInfo: Partial<User>): Promise<TokenDto> {
    const expiresIn = new Date().getTime() + EExpirationTime.TWO_DAYS;
    const access_token = await this.jwtService.signAsync({...userInfo }, { secret: this.configService.get<string>('auth.secret_key'), expiresIn });

    return { access_token_expires_in: expiresIn, access_token };
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
