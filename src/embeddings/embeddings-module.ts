import { Module } from '@nestjs/common';
import { EmbeddingsController } from './embeddings.controller.js';
import { EmbeddingsService } from './embeddings.service.js';
import { GeminiClient } from '../ai/clients/gemini.client.js';

@Module({
  controllers: [EmbeddingsController],
  providers: [EmbeddingsService, GeminiClient],
  exports: [EmbeddingsService],
})
export class EmbeddingsModule {}


