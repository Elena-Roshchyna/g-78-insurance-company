import { HttpException } from '@nestjs/common';

export class EntitySaveException extends HttpException {
  constructor(entityTitle: string, fieldTitle: string) {
    super(`${entityTitle} save error: that ${fieldTitle} already exists`, 400);
  }
}


