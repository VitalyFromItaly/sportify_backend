import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from './auth.decorators';
import { AuthService } from './auth.service';
import { UserCredsDto } from './dtos/UserCreds.dto';
import { TokenDto } from './dtos/Token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { User } from '../user/user.entity';
import { RefreshTokenDto } from './dtos/RefreshToken.dto';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiOperation({ operationId: 'login' })
  @Post('login')
  @ApiCreatedResponse({ description: 'create user', type: TokenDto })
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: UserCredsDto): Promise<TokenDto> {
    return await this.authService.getTokens(user);
  }

  @Get('user')
  @ApiOperation({ operationId: 'user' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'get user info by token', type: User })
  @UseGuards(JwtAuthGuard)
  async getUser(@Request() req: any): Promise<Partial<User>> {
    return req.user;
  }

  @Get('refresh')
  @ApiOperation({ operationId: 'refreshTokens' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'refresh tokens', type: TokenDto })
  @UseGuards(JwtAuthGuard)
  async getAccessToken(@Body() { refresh_token }: RefreshTokenDto, @Request() req: any): Promise<Partial<TokenDto>> {
    try {
      const tokens = await this.authService.updateToken(refresh_token, req.user);
      return {...tokens };
    } catch(error) {
      throw error;
    }
  }
}
