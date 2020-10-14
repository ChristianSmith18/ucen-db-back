import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    if ((await this.userRepository.findOne(createUserDto.rut)) === undefined) {
      let user = new User();
      user = { ...createUserDto };

      return await this.userRepository.save(user);
    }

    throw new Error();
  }

  async updateUser(createUserDto: CreateUserDto): Promise<User> {
    let user = new User();
    user = { ...createUserDto };

    return await this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
