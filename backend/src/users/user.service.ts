import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';

import { CreateUserDto } from 'src/users/user.dto';
import { AuthenticationEntity } from 'src/authentication/authentication.entity';
import { UserEntity } from './user.entity';
import { UserNotExistException } from './exceprions/user-not-exist.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
    authentication: AuthenticationEntity,
    queryRunner: QueryRunner,
  ): Promise<UserEntity> {
    const user = this.userRepository.create({
      ...createUserDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new UserNotExistException();
    }

    return user;
  }
}
