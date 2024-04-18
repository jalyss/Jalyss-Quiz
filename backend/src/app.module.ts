import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LevelsModule } from './levels/levels.module';
import { WheelPropositionsModule } from './wheel-propositions/wheel-propositions.module';

import { AdminsModule } from './admins/admins.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';
import { ParticipantsModule } from './participants/participants.module';
import { AuthModule } from './auth/auth.module';
import { ParticipantQuestionsModule } from './participant-questions/participant-questions.module';

@Module({
  imports: [PrismaModule, LevelsModule, WheelPropositionsModule, AdminsModule, AnswersModule, QuestionsModule, ParticipantsModule, AuthModule, ParticipantQuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
