import { BadRequestException } from '@nestjs/common';

export class WrongCredentialsException extends BadRequestException {
  constructor(error?: string) {
    super('Wrong credentials provided', error);
  }
}
