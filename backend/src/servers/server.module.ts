import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerEntity } from './server.entity';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServerEntity])],
  providers: [ServerService],
  controllers: [ServerController],
})
export class ServerModule {}
