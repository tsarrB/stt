import { DomainService } from './../domains/domains.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { NodeSSH } from 'node-ssh';
import { GTMContainerEntity } from './gtm-containers.entity';
import { CreateGTMContainerDto } from './gtm-containers.dto';
import { PostgresErrorCode } from 'src/database/constraints/errors.constraint';
import { GTMContainerAlreadyExistException } from './exceptions/gtm-container-exist.exception';
import { UserEntity } from 'src/users/user.entity';
import { ServerEntity } from 'src/servers/server.entity';
import { DomainEntity } from 'src/domains/domains.entity';
import { ConfigService } from '@nestjs/config';
// import { ServerService } from 'src/servers/server.service';

const ssh = new NodeSSH();

@Injectable()
export class GTMContainerService {
  constructor(
    @InjectRepository(GTMContainerEntity)
    private _gtmContainerRepository: Repository<GTMContainerEntity>,
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
    @InjectRepository(ServerEntity)
    private _serverRepository: Repository<ServerEntity>,
    @InjectRepository(DomainEntity)
    private readonly configService: ConfigService,

    private readonly domainService: DomainService,
    private readonly _connection: Connection,
  ) {}

  async getAllGTMContainers(_user: UserEntity): Promise<GTMContainerEntity[]> {
    const user = (await this._userRepository.findOne({
      where: { id: _user.id },
      relations: [
        'gtmContainers',
        'gtmContainers.domains',
        'gtmContainers.server',
      ],
    })) as UserEntity;

    return user.gtmContainers;
  }

  async createGTMContainer(
    _user: UserEntity,
    createGTMContainerDto: CreateGTMContainerDto,
  ): Promise<GTMContainerEntity | string> {
    const { serverId } = createGTMContainerDto;

    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const [server, user] = (await Promise.all([
        this._serverRepository.findOne({
          where: { uuid: serverId },
        }),
        this._userRepository.findOne({
          where: { id: _user.id },
          relations: ['gtmContainers'],
        }),
      ])) as [ServerEntity, UserEntity];

      const container = this._gtmContainerRepository.create({
        ...createGTMContainerDto,
        server,
        owner: user,
        domains: [],
      });

      // Create default domain for gtm container `identifier.servertagtracking.com`
      const domain = await this.domainService.createGTMContainerDomain(
        queryRunner,
        container,
        server,
      );

      container.domains.push(domain);

      const gtmContainer = await queryRunner.manager.save(container);

      user.gtmContainers.push(gtmContainer);

      await queryRunner.manager.save(user);

      await this._sshCreateGTMContainer(gtmContainer);

      await queryRunner.commitTransaction();

      return gtmContainer;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new GTMContainerAlreadyExistException();
      }
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  private async _sshCreateGTMContainer(gtmContainer: GTMContainerEntity) {
    const IS_CREATING_REAL_CONTAINER = this.configService.get(
      'IS_CREATING_REAL_CONTAINER',
    );

    if (!IS_CREATING_REAL_CONTAINER) return;

    // container.server.ipAddress;
    // container.domains[0].hostName; // DOMAIN
    // container.config; // CONTAINER_CONFIG
    // container.identifier; // IDENTIFIER

    const params = [
      gtmContainer.config,
      gtmContainer.domains[0].hostName,
      gtmContainer.identifier,
    ];

    ssh
      .connect({
        host: gtmContainer.server.ipAddress,
        username: process.env.SSH_USERNAME,
        // TODO: Use ssh privateKey
        password: process.env.SSH_PASSWORD,
      })
      .then(() => {
        ssh
          .execCommand(`sh ./create-container.sh ${params.join(' ')}`, {
            cwd: '/var/www/scripts',
          })
          .then((result) => {
            console.log('STDOUT: ' + result.stdout);
            console.log('STDERR: ' + result.stderr);
          });
      });
  }
}
