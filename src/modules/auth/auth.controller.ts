import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './auth.decorators';
import { AuthService } from './auth.service';
import { UserCredsDto } from './dtos/UserCreds.dto';
import { TokenDto } from './dtos/Token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiCreatedResponse({ description: 'create user', type: TokenDto })
  @UseGuards(LocalAuthGuard)
  login(@Body() user: UserCredsDto): TokenDto {
    return this.authService.getToken(user);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Request() req: any): Promise<any> {
  console.log(req.user);
      
    return req.user;
  }
}
