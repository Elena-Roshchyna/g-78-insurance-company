export interface GeminiEmbeddingRequest {
  model: string;
  content: {
    parts: Array<{ text: string }>;
  };
}


