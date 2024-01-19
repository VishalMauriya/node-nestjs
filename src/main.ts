import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { authMiddleware } from './middleware/auth.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //global middleware
  // app.use(authMiddleware);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT;
  await app.listen(port);
  console.log(`Listening on http://localhost:${port}`);
  
}
bootstrap();
