"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const fs_1 = require("fs");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const isDev = process.env.NODE_ENV === 'development';
    let httpConfig;
    if (isDev) {
        httpConfig = {
            key: (0, fs_1.readFileSync)(process.env.SSL_KEY_PATH),
            cert: (0, fs_1.readFileSync)(process.env.SSL_CERT_PATH),
        };
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: httpConfig,
    });
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix(config.get('api_prefix'));
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            const result = errors.map((error) => ({ [error.property]: Object.values(error.constraints) }));
            return new common_1.BadRequestException(result);
        }
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Sportify Api')
        .setDescription('Sportify API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup(`${config.get('api_prefix')}/swagger`, app, document);
    await app.listen(config.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map