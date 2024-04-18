import { Injectable } from '@nestjs/common';
import { CreateParticipantQuestionDto } from './dto/create-participant-question.dto';
import { UpdateParticipantQuestionDto } from './dto/update-participant-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantQuestionsService {
  constructor(private readonly prisma : PrismaService){}
async  create(dto: CreateParticipantQuestionDto) {
    return await this.prisma.participantQuestion.create({
      data: dto
    })
  }

 async findAll() {
  return await this.prisma.participantQuestion.findMany({})
  }

 async findOne(id: number) {
    return this.prisma.participantQuestion.findUnique(
      {
        where :{
          id
        }
      }
    )
  }

  update(id: number, updateParticipantQuestionDto: UpdateParticipantQuestionDto) {
    return `This action updates a #${id} participantQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} participantQuestion`;
  }
}
