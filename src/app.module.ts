import { Module } from '@nestjs/common';
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
import { TrainigPlanModule } from './trainig_plan/trainig_plan.module';
import { TrainigPlanModule } from './modules/trainig_plan/trainig_plan.module';
import { TrainingPlanModule } from './modules/training_plan/training-plan.module';

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
    TrainigPlanModule,
    TrainingPlanModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
