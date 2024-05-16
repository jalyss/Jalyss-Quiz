import { level } from './../../prisma/data';
import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma:PrismaService){}

 async create(createQuestionDto: CreateQuestionDto) {
    return this.prisma.question.create({
      data:createQuestionDto
    })
  }

  async findAll() {
    return this.prisma.question.findMany({
      where: {
isActive : true
      },
      include : {
        answers : true,
        Level : true 
      }
    })
  }

  async findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return await this.prisma.question.update({
      where : {
        id
      },
      data : updateQuestionDto
    })
  }

  async remove(id: number) {
    return await this.prisma.question.delete({
      where : {
        id
      }
    });
  }
}
