import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    private mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendConfirmation(email: any, token: string): Promise<void> {
    const confirmation_url = `${this.configService.get(
      'FRONTEND_URL',
    )}/confirmation?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to "ServerTagTracking"! Confirm your Email',
      template: './welcome', // `.ejs` extension is appended automatically
      context: {
        // filling <%= %> brackets with content
        name: email,
        confirmation_url,
      },
    });
  }
}
