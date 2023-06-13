import { BadRequestException } from '@nestjs/common';

export class DomainAlreadyExistException extends BadRequestException {
  constructor(error?: string) {
    super('Domain with that name already exists', error);
  }
}
