import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './auth.config';
import { JwtAuthGuard } from './jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false, load: [config] }),
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async(configService: ConfigService) => {
        return {
          secret: configService.get<string>('auth.secret_key'),
          signOptions: {
            expiresIn: configService.get<string>('auth.expires_in')
          }
        };
      },
      inject: [ConfigService]
    })
    // JwtModule.register({
    //   secret: process.env.SECRET_KEY,
    //   signOptions: { expiresIn: '10s' }
    //   // signOptions: { expiresIn: '2 days' }
    // })
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
  controllers: [AuthController]
})
export class AuthModule {}
