import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
// import { VaultService } from '~/modules/vault/vault.service';
import { ConfigService } from '@nestjs/config';
// import { TVaultEnv } from '~/app.types';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  // constructor(private readonly vaultService: VaultService, private readonly configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const isDev = this.configService.get<string>('db.environment') === 'development';
    
    
    let dbConfig;
    if (isDev) {
      dbConfig = {
        host: this.configService.get<string>('db.host'),
        port: +this.configService.get<number>('db.port'),
        username: this.configService.get<string>('db.username'),
        password: this.configService.get<string>('db.password'),
        database: this.configService.get<string>('db.database'),
        type: this.configService.get<string>('db.type'),
        synchronize: this.configService.get<string>('db.synchronize')
      };
    } 
    // else {
    //   await this.vaultService.loadConfig();
    //   const vaultConfig = await this.vaultService.get<TVaultEnv>('env');
    //   dbConfig = {
    //     host: vaultConfig.DB_HOST,
    //     username: vaultConfig.DB_USERNAME,
    //     password: vaultConfig.DB_PASSWORD,
    //     database: vaultConfig.DB_DATABASE,
    //     port: 3306,
    //   };
    // }
    return {
      ...dbConfig,
      type: 'mysql',
      entities: ['dist/**/*.entity{.ts,.js}'],
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // subscribers: ['dist/api/**/entities/**/*.subscriber{.ts,.js}'],
      // synchronize: true, //isDev, временно пока не накодим базовую базу
      // migrationsRun: true,
      // migrationsTableName: 'migrations',
      migrations: ['src/migrations/*.ts']
      // logging: true
      // dropSchema: !isDev,
    };
  }
}
