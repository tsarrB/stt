import { BadRequestException } from '@nestjs/common';

export class GTMContainerAlreadyExistException extends BadRequestException {
  constructor(error?: string) {
    super('GTM Container with that identifier already exists', error);
  }
}
