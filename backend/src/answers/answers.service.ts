import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma:PrismaService){}
 async create(dto: CreateAnswerDto) {
    return await this.prisma.answer.create({
      data : dto
    })
  }

 async findAll() {
    return await this.prisma.answer.findMany({});
  }



async  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return await this.prisma.answer.update({
      where : {
        id : id
      },
      data : updateAnswerDto
    });
  }

async  remove(id: number) {
    return await this.prisma.answer.delete({
      where : {
        id : id
      }
    });
  }
}
