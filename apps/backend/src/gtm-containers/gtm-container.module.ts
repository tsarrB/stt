import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GTMContainerEntity } from './gtm-containers.entity';
import { GTMContainerService } from './gtm-containers.service';
import { GTMContainerController } from './gtm-containers.controller';

import { ServerModule } from 'src/servers/server.module';
import { UserModule } from 'src/users/user.module';
import { UserEntity } from 'src/users/user.entity';
import { ServerEntity } from 'src/servers/server.entity';
import { DomainEntity } from 'src/domains/domains.entity';
import { DomainModule } from 'src/domains/domains.module';
import { DomainService } from 'src/domains/domains.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ServerModule,
    DomainModule,
    ConfigModule,
    TypeOrmModule.forFeature([
      GTMContainerEntity,
      UserEntity,
      ServerEntity,
      DomainEntity,
    ]),
  ],
  providers: [GTMContainerService, DomainService],
  controllers: [GTMContainerController],
})
export class GTMContainerModule {}
