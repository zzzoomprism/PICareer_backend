import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const options = {
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: ['http://localhost:4200']
};

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: options });
  await app.listen(8000);
}
bootstrap();
