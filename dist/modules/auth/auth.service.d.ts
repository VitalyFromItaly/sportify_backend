import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TUserCreds } from './auth.domain';
import { TokenDto } from './dtos/Token.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    getTokens(userInfo: TUserCreds, refreshToken?: string): Promise<TokenDto>;
    refreshAccessToken(refreshToken: string, userCreds: User): Promise<TokenDto>;
    private getAccessToken;
    validateUserCreds(email: string, password: string): Promise<User | undefined>;
}
