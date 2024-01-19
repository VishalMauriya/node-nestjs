import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel : Model<User>){}

  async create(createuserDto : CreateUserDto) : Promise<User> {
    const createuser = new this.userModel(createuserDto);
    return createuser.save();
  }

  async findAll() : Promise<User[]> {
    return this.userModel.find().exec()
  }

}