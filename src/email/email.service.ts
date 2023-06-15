import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendConfirmation(email: any, token: string): Promise<void> {
    const confirmation_url = `example.com/auth/confirm?token=${token}`;

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
