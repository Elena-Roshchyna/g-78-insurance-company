import { Injectable } from '@nestjs/common';
import { GeminiClient } from './clients/gemini.client.js';
import { AiChatRequestDto } from './dto/ai-chat-request.dto.js';
import { GeminiPart } from './types/gemini-part.js';
import { GeminiContent } from './types/gemini-content.js';
import { GeminiRequest } from './types/gemini-request.js';

@Injectable()
export class AiService {
  constructor(private readonly client: GeminiClient) {}

  async getResultFromAI(aiChatRequestDto: AiChatRequestDto): Promise<string> {
    const part: GeminiPart = new GeminiPart();
    part.text = aiChatRequestDto.message;

    const content: GeminiContent = new GeminiContent();
    content.parts = [part];

    const geminiRequest: GeminiRequest = new GeminiRequest();
    geminiRequest.contents = [content];

    return this.client.generateContent(geminiRequest);
  }
}


