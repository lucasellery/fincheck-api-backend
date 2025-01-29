import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync('src/key.pem'),
    cert: readFileSync('src/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
  console.log('Application is running on https://localhost:3000');
}
bootstrap();
