import { ParticipantsController } from './../participants/participants.controller';
import { Participant } from './../participants/entities/participant.entity';
import { Injectable } from '@nestjs/common';
import { CreateWheelPropositionDto } from './dto/create-wheel-proposition.dto';
import { UpdateWheelPropositionDto } from './dto/update-wheel-proposition.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WheelPropositionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWheelPropositionDto: CreateWheelPropositionDto) {
    return this.prisma.wheelProposition.create({
      data: createWheelPropositionDto,
    });
  }

  async findAll() {
    return this.prisma.wheelProposition.findMany({
      include : {
      winner : true
      }
    });
  }
  async findAllIsActive() {
    return this.prisma.wheelProposition.findMany({ where: { isActive: true } });
  }

  async findOne(id: number) {
    return `This action returns a #${id} wheelProposition`;
  }

  async update(
    id: number,
    updateWheelPropositionDto: UpdateWheelPropositionDto,
  ) {
    return await this.prisma.wheelProposition.update({
      where : {
        id
      },
      data : updateWheelPropositionDto
    })
  }

  async remove(id: number) {
    return `This action removes a #${id} wheelProposition`;
  }
}
