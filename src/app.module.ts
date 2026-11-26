import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module.js';
import { CarsModule } from './cars/cars.module.js';
import { PoliciesModule } from './policies/policies.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmbeddingsModule } from './embeddings/embeddings-module.js';
import { AiModule } from './ai/ai.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'insurance_78',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CarsModule,
    PoliciesModule,
    AiModule,
    EmbeddingsModule
  ],
})
export class AppModule {}


