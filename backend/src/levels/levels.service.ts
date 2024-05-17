import { level } from './../../prisma/data';
import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLevelDto: CreateLevelDto) {
    return await this.prisma.level.create({
      data: createLevelDto,
    });
  }

  async findAll(level: number) {
    let levels = await this.prisma.level.findMany({
      include: {
        question: {
          where: {
            isActive: true,
          },
          include: {
            answers: true,
            Level: true,
          },
        },
      },
    });
    // automating random question
    return levels[level]?.question[
      Math.floor(Math.random() ** 2 * (levels[level]?.question?.length + 1))
    ];
  }

  async findOne(id: number) {
    return `This action returns a #${id} level`;
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    return await this.prisma.level.update({
      where: {
        id,
      },
      data: updateLevelDto,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} level`;
  }
}
