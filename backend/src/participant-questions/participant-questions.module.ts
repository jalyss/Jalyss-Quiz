import { Module } from '@nestjs/common';
import { ParticipantQuestionsService } from './participant-questions.service';
import { ParticipantQuestionsController } from './participant-questions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ParticipantQuestionsController],
  providers: [ParticipantQuestionsService,PrismaService],
})
export class ParticipantQuestionsModule {}
