import { Module } from '@nestjs/common';
import { WheelPropositionsService } from './wheel-propositions.service';
import { WheelPropositionsController } from './wheel-propositions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WheelPropositionsController],
  providers: [WheelPropositionsService,PrismaService],
})
export class WheelPropositionsModule {}
