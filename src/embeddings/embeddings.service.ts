import { Injectable } from '@nestjs/common';
import { GeminiClient } from '../ai/clients/gemini.client.js';

@Injectable()
export class EmbeddingsService {
  constructor(private readonly client: GeminiClient) {}

  async createEmbeddings(texts: string[]): Promise<number[][]> {
    if (texts.length === 0) {
      return [];
    }
    return this.client.embedTexts(texts);
  }
}


