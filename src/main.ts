import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    exceptionFactory: (errors) => {
      const result = errors.map((error) => ({ [error.property]: Object.values(error.constraints) }));
      return new BadRequestException(result);
    }
}),); // валидирует все роуты автоматом 
  await app.listen(3000);
}
bootstrap();

console.log(process.env);

