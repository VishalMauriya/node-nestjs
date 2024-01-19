import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { authMiddleware } from './middleware/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //global middleware
  // app.use(authMiddleware);
  await app.listen(3000);
}
bootstrap();
