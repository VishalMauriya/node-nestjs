import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { authMiddleware } from './middleware/auth.middleware';
import { UsersController } from './users/user.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://vishal:vishal1234@cluster0.xtolxfn.mongodb.net/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(authMiddleware)
    .forRoutes(UsersController)
  }
}
