import { HttpStatus, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '~/modules/user/user.module';
import {databaseConfig, appConfig, authConfig} from './config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './database/typeorm.config.service';
import { AuthModule } from '~/modules/auth/auth.module';
import { ActivityModule } from '~/modules/activity/activity.module';
import { DictionaryModule } from '~/modules/dictionary/dictionary.module';
import { TrainingPlanModule } from './modules/training-plan/training-plan.module';
import { IWsApiConfig, WsModule } from '@drozd/nestjs-ws-api';
import validationConfig from '~/config/validation.config';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig, authConfig] }),
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService
    }),
    AuthModule,
    ActivityModule,
    DictionaryModule,
    TrainingPlanModule,
    WsModule.registerAsync({
      useFactory: (): IWsApiConfig => {
        return {
          validationConfig,
          async validate(socket) {
            try {
              const authGuard = new (AuthGuard('jwt'))();
              const isAuth = await (authGuard.canActivate(new ExecutionContextHost([socket])) as Promise<boolean>);

              if (!isAuth) {
                return HttpStatus.UNAUTHORIZED;
              }
            } catch (e) {
              return HttpStatus.UNAUTHORIZED;
            }
            return HttpStatus.OK;
          }
        };
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
