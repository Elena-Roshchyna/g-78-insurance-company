import { HttpException } from '@nestjs/common';

export class EntityNotFoundException extends HttpException {
  constructor(entityTitle: string, id?: number) {
    if (id) {
      super(`${entityTitle} with ${id} not found`, 404);
    } else {
      super(`There is not a single ${entityTitle} in the database`, 404);
    }
  }
}

