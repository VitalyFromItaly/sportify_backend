import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService, private userService: UserService) {
    super({
      secretOrKey: configService.get<string>('auth.secret_key'),
      jwtFromRequest: function(request: any): string {
        if (request.constructor.name === 'Socket') {
          return request.handshake.auth.token;
        } else {
          return ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        }
      }
    });
  }

  async validate(payload: User) {
    const user = await this.userService.findOneByEmail(payload.email);
    if (!user) {
      throw new Error('user not found');
    }

    return user;
  }
}
