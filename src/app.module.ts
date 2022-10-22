import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '~/modules/user/user.module';
import { databaseConfig, appConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './database/typeorm.config.service';
import { AuthModule } from '~/modules/auth/auth.module';
import { ActivityModule } from '~/modules/activity/activity.module';
import { DictionaryModule } from '~/modules/dictionary/dictionary.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig] }),
    UserModule,
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: TypeOrmConfigService }),
    AuthModule,
    ActivityModule,
    DictionaryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
