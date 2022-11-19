import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      host: this.configService.get<string>('db.host'),
      port: +this.configService.get<number>('db.port'),
      username: this.configService.get<string>('db.username'),
      password: this.configService.get<string>('db.password'),
      database: this.configService.get<string>('db.database'),
      type: 'mysql',
      synchronize: true,
      migrationsRun: false,
      migrationsTableName: 'migrations',
      autoLoadEntities: true,
      logging: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['~/migrations/*.ts']
    };
  }
}
