import { AuthService } from './auth.service';
import { UserCredsDto } from './dtos/UserCreds.dto';
import { TokenDto } from './dtos/Token.dto';
import { RefreshTokenDto } from './dtos/RefreshToken.dto';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(user: UserCredsDto): Promise<TokenDto>;
    getAccessToken({ refresh_token }: RefreshTokenDto, req: any): Promise<Partial<TokenDto>>;
    getTokens({ refresh_token }: RefreshTokenDto, req: any): Promise<Partial<TokenDto>>;
}
