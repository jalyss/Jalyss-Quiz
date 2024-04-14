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

  async findAll(level:number) {
  const randomNumber = Math.floor(Math.random()*8)

    let levels = await this.prisma.level.findMany({
      include : {
        question:{
         include : {
          answers : true,
          Level:true
         }
        }
      }
    })
    return levels[level]?.question[randomNumber]
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
