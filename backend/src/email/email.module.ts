import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailController } from './email.controller';

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('SMTP_HOST'),
          secure: config.get('SMTP_SECURE'),
          port: config.get('SMTP_PORT'),
          auth: {
            user: config.get('SMTP_USERNAME'),
            pass: config.get('SMTP_PASSWORD'),
          },
        },
        defaults: {
          from: `"ServerTagTracking" <${config.get('SMTP_USERNAME')}>`,
        },
        template: {
          dir: join(__dirname, '../../', 'templates'),
          adapter: new EjsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
