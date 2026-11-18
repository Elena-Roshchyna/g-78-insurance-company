import { HttpException } from '@nestjs/common';

export class EntityUpdateException extends HttpException {
  constructor(message: string) {
    super(message, 400);
  }
}


