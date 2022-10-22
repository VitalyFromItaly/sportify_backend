import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from './auth.decorators';
import { AuthService } from './auth.service';
import { UserCredsDto } from './dtos/UserCreds.dto';
import { TokenDto } from './dtos/Token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RefreshTokenDto } from './dtos/RefreshToken.dto';
import { UserService } from '../user/user.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Public()
  @ApiOperation({ operationId: 'login' })
  @Post('login')
  @ApiCreatedResponse({ description: 'login', type: TokenDto })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  async login(@Body() user: UserCredsDto): Promise<TokenDto> {
    const tokens = await this.authService.getTokens(user);
    const { refresh_token } = tokens;
    this.userService.setRefreshToken(user.email, refresh_token);
    return tokens;
  }

  @Post('refresh-access-token')
  @ApiOperation({ operationId: 'refreshAccessToken' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'refresh tokens', type: TokenDto })
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getAccessToken(@Body() { refresh_token }: RefreshTokenDto, @Request() req: any): Promise<Partial<TokenDto>> {
    try {
      const token = await this.authService.refreshAccessToken(refresh_token, req.user);
      return token;
    } catch(error) {
      throw error;
    }
  }

  @Post ('refresh-tokens')
  @ApiOperation({ operationId: 'refreshTokens' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'refresh tokens', type: TokenDto })
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getTokens(@Body() { refresh_token }: RefreshTokenDto, @Request() req: any): Promise<Partial<TokenDto>> {
    try {
      const token = await this.authService.getTokens(req.user, refresh_token);
      return token;
    } catch(error) {
      throw error;
    }
  }
}
