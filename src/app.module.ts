import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import config from './database/config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './database/typeorm.config.service';
import { AuthModule } from './modules/auth/auth.module';
import { ActivityModule } from './modules/activity/activity.module';
import { DictionaryModule } from './modules/dictionary/dictionary.module';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    UserModule,
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: TypeOrmConfigService }),
    AuthModule,
    ActivityModule,
    DictionaryModule,
    PlanModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
