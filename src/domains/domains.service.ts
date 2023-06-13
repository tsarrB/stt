import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';
import { ofetch } from 'ofetch';

import { DomainEntity } from './domains.entity';
import { CreateDomainDto } from './domains.dto';
import { PostgresErrorCode } from 'src/database/constraints/errors.constraint';
import { DomainAlreadyExistException } from './exceptions/domain-already-exist.exception';
import { rootDomain } from 'src/constants';
import { CreateDomain } from './interfaces';
import { ServerEntity } from 'src/servers/server.entity';
import { GTMContainerEntity } from 'src/gtm-containers/gtm-containers.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DomainService {
  constructor(
    @InjectRepository(DomainEntity)
    private _domainRepository: Repository<DomainEntity>,
    private readonly configService: ConfigService,
    private readonly _connection: Connection,
  ) {}

  async createDomain(createDomainDto: CreateDomainDto): Promise<DomainEntity> {
    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const domain = await queryRunner.manager.save(
        this._domainRepository.create(createDomainDto),
      );

      await queryRunner.commitTransaction();

      return domain;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new DomainAlreadyExistException();
      }

      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  async createGTMContainerDomain(
    queryRunner: QueryRunner,
    container: GTMContainerEntity,
    server: ServerEntity,
  ): Promise<DomainEntity> {
    try {
      const domain = await queryRunner.manager.save(
        this._domainRepository.create({
          hostName: `${container.identifier}.${rootDomain}`,
          server,
        }),
      );

      // wait for domain to be created on cloudflare ??
      await this._createDomain({
        domain: container.identifier,
        serverIp: server.ipAddress,
      });

      return domain;
    } catch (error) {
      console.log(error);
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new DomainAlreadyExistException();
      }

      throw new InternalServerErrorException();
    }
  }

  private async _createDomain(params: CreateDomain): Promise<void> {
    const CLOUDFLARE_API_KEY = this.configService.get('CLOUDFLARE_API_KEY');
    const ZONE_IDENTIFIER = this.configService.get(
      'CLOUDFLARE_ZONE_IDENTIFIER',
    );

    await ofetch(
      `https://api.cloudflare.com/client/v4/zones/${ZONE_IDENTIFIER}/dns_records`,
      {
        retry: 3,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CLOUDFLARE_API_KEY}`,
        },
        body: {
          content: params.serverIp,
          name: params.domain,
          comment: params.comment || 'From api',
          proxied: true,
          type: 'A',
          ttl: 60,
        },
      },
    );
  }
}
