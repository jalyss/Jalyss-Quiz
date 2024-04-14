import { answer } from './../../prisma/data';
import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private readonly prisma:PrismaService){}

  async create(createParticipantDto: CreateParticipantDto) {
    return this.prisma.participant.create({
      data:createParticipantDto
    })
  }

  async findAll() {
    return this.prisma.participant.findMany({
      include : {
        participantAnswer :true
      }
    })
  }

  async  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  async update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  async remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
