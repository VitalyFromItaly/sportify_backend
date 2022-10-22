import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import {HttpsOptions} from '@nestjs/common/interfaces/external/https-options.interface';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
  const isDev = process.env.NODE_ENV === 'development';
  let httpConfig;
  // на окружениях HTTPS настраивается на уровне nginx
  if (isDev) {
    httpConfig = {
      key: readFileSync(process.env.SSL_KEY_PATH),
      cert: readFileSync(process.env.SSL_CERT_PATH)
    } as HttpsOptions;
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions: httpConfig
  });

  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('api_prefix'));
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      const result = errors.map((error) => ({ [error.property]: Object.values(error.constraints) }));
      return new BadRequestException(result);
    }
  })); // валидирует все роуты автоматом


  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sportify Api')
    .setDescription('Sportify API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${config.get<string>('api_prefix')}/swagger`, app, document);

  await app.listen(config.get<number>('port'));
}
bootstrap();
