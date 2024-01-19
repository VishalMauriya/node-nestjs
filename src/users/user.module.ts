import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
// import { User, UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports: [
            // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
            TypeOrmModule.forFeature([User])
          ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}