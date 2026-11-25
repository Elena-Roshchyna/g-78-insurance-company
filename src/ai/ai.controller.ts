import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service.js';
import { AiChatRequestDto } from './dto/ai-chat-request.dto.js';

@Controller('ai')
export class AiController {
  constructor(private readonly service: AiService) {}

  @Post('chat')
  async askAi(@Body() aiChatRequestDto: AiChatRequestDto): Promise<string> {
    return await this.service.getResultFromAI(aiChatRequestDto);
  }
}

