import { level } from './../../prisma/data';
import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelsService {
  constructor(private readonly prisma:PrismaService){}

 async create(createLevelDto: CreateLevelDto) {
    return await this.prisma.level.create({
      data:createLevelDto
    })
  }

  async findAll() {
    return this.prisma.level.findMany({
      include : {
        question:{
          select : {
            answers : true
          }
        }
      }
    })
  }

  async findOne(id: number) {
    return `This action returns a #${id} level`;
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    return `This action updates a #${id} level`;
  }

  async  remove(id: number) {
    return `This action removes a #${id} level`;
  }
}
