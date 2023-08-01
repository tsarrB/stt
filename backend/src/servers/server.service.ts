import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { ServerEntity } from './server.entity';
import { CreateServerDto } from './server.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(ServerEntity)
    private _serverRepository: Repository<ServerEntity>,
    private readonly _connection: Connection,
  ) {}

  async findAll(): Promise<ServerEntity[]> {
    return this._serverRepository.find();
  }

  async createServer(createServerDto: CreateServerDto): Promise<ServerEntity> {
    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const server = await queryRunner.manager.save(
        this._serverRepository.create(createServerDto),
      );

      await queryRunner.commitTransaction();

      return server;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }
}
