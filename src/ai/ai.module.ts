import { Module } from '@nestjs/common';
import { AiController } from './ai.controller.js';
import { AiService } from './ai.service.js';
import { GeminiClient } from './clients/gemini.client.js';

@Module({
  controllers: [AiController],
  providers: [AiService, GeminiClient],
})
export class AiModule {}
