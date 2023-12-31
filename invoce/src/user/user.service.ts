import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    console.log("1231312 into service" , createUserDto);
    return this.userRepository.save(createUserDto);
    // return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
    // return `This action returns all user`;
  }

  findOne(id: number):Promise<User> {
    return this.userRepository.findOneBy({id});
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
