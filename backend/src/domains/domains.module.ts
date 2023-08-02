import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainEntity } from './domains.entity';
import { DomainService } from './domains.service';
import { DomainController } from './domains.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([DomainEntity])],
  providers: [DomainService],
  controllers: [DomainController],
})
export class DomainModule {}
