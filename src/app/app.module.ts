import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthenticationModule } from 'src/authentication/authentication.module';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/users/user.module';
import { ServerModule } from 'src/servers/server.module';
import { DomainModule } from 'src/domains/domains.module';
import { GTMContainerModule } from 'src/gtm-containers/gtm-container.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NODE_ENV } from './constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        NODE_ENV: Joi.string()
          .required()
          .valid(NODE_ENV.DEVELOPMENT, NODE_ENV.PRODUCTION),

        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),

        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),

        CLOUDFLARE_API_KEY: Joi.string().required(),
        CLOUDFLARE_ZONE_IDENTIFIER: Joi.string().required(),
      }),
    }),

    DatabaseModule,
    AuthenticationModule,
    UserModule,
    ServerModule,
    DomainModule,
    GTMContainerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
