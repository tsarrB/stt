import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotExistException extends HttpException {
  constructor() {
    super('User with this id does not exist', HttpStatus.NOT_FOUND);
  }
}
