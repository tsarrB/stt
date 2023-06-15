import { BadRequestException } from '@nestjs/common';

export class TokenNotExistException extends BadRequestException {
  constructor(error?: string) {
    super('Token not exist!', error);
  }
}
