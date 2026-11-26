import { Body, Controller, Post } from '@nestjs/common';
import { EmbeddingsService } from './embeddings.service.js';
import { EmbeddingsRequestDto } from './dto/create-embedding-request.dto.js';

@Controller('embeddings')
export class EmbeddingsController {
  constructor(private readonly service: EmbeddingsService) {}

  @Post()
  async createEmbeddings(
    @Body() request: EmbeddingsRequestDto,
  ): Promise<number[][]> {
    return this.service.createEmbeddings(request.texts);
  }
}


