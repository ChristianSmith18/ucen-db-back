import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(3000);
}
bootstrap();
