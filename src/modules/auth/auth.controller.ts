import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './auth.decorators';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: any): any {
    return this.authService.getToken(req.user);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Request() req: any): Promise<any> {
    return req.user;
  }
}
