
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createParticipantDto: CreateParticipantDto) {
    const participant = await this.prisma.participant.findUnique({
      where: {
        app_email : {
          email: createParticipantDto.email,
          app: createParticipantDto.app
        }
      },
    });
    console.log(participant);

    if (!participant) {
      return this.prisma.participant.create({
        data: createParticipantDto,
      });
    } else {
      throw new BadRequestException('invalid Email');
    }
  }

  async findAll() {
    return this.prisma.participant.findMany({
      include: {
        participantAnswer: true,
        WheelProposition : true
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  async update(id: number, dto: UpdateParticipantDto) {
    return await this.prisma.participant.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
