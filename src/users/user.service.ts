import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  // constructor(@InjectModel(User.name) private userModel : Model<User>){}
  constructor( @InjectRepository(User) private userRepository : Repository<User>){}

  create(createuserDto : CreateUserDto) {
    const user = this.userRepository.create(createuserDto)
    return this.userRepository.save(user)
  }

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  // async create(createuserDto : CreateUserDto) : Promise<User> {
  //   const createuser = new this.userModel(createuserDto);
  //   return createuser.save();
  // }

  // async findAll() : Promise<User[]> {
  //   return this.userModel.find().exec()
  // }

}