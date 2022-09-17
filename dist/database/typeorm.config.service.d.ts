import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export declare class TypeOrmConfigService implements TypeOrmOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions>;
}
