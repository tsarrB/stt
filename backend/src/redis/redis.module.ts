import { Module } from '@nestjs/common';
import {
  RedisModuleOptions,
  RedisModule as _RedisModule,
} from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    _RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<RedisModuleOptions> => ({
        config: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          password: configService.get('REDIS_PASSWORD'),
        },
      }),
    }),
  ],
})
export class RedisModule {}
