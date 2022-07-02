import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/entities/user.entity";
import { AuthService } from "../auth.service";


@Injectable()
export default class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(name: string, password: string): Promise<User> {
    const user = await this.authService.vqlidateUser(name, password);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}