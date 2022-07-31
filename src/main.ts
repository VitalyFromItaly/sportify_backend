import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    exceptionFactory: (errors) => {
      const result = errors.map((error) => ({ [error.property]: Object.values(error.constraints) }));
      return new BadRequestException(result);
    }
  })); // валидирует все роуты автоматом 

  const config = new DocumentBuilder()
  .setTitle('Sportify Api')
  .setDescription('Sportify API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
