import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(payload: User): Promise<User>;
}
export {};
