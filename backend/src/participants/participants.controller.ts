import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("participants")
@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post()
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantsService.create(createParticipantDto);
  }

  @Get()
  findAll() {
    return this.participantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateParticipantDto) {
    return this.participantsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantsService.remove(+id);
  }
}
