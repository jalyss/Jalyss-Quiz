import { Injectable } from '@nestjs/common';
import { CreateWheelPropositionDto } from './dto/create-wheel-proposition.dto';
import { UpdateWheelPropositionDto } from './dto/update-wheel-proposition.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WheelPropositionsService {
  constructor(private readonly prisma:PrismaService){}

  
 async create(createWheelPropositionDto: CreateWheelPropositionDto) {
    return this.prisma.wheelProposition.create({
      data:createWheelPropositionDto
    })
  }

 async findAll() {
    return this.prisma.wheelProposition.findMany({});
  }

 async findOne(id: number) {
    return `This action returns a #${id} wheelProposition`;
  }

 async update(id: number, updateWheelPropositionDto: UpdateWheelPropositionDto) {
    return `This action updates a #${id} wheelProposition`;
  }

  async remove(id: number) {
    return `This action removes a #${id} wheelProposition`;
  }
}
