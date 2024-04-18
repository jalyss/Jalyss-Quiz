import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantQuestionsService } from './participant-questions.service';
import { CreateParticipantQuestionDto } from './dto/create-participant-question.dto';
import { UpdateParticipantQuestionDto } from './dto/update-participant-question.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("participant-questions")
@Controller('participant-questions')
export class ParticipantQuestionsController {
  constructor(private readonly participantQuestionsService: ParticipantQuestionsService) {}

  @Post()
  create(@Body() createParticipantQuestionDto: CreateParticipantQuestionDto) {
    return this.participantQuestionsService.create(createParticipantQuestionDto);
  }

  @Get()
  findAll() {
    return this.participantQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipantQuestionDto: UpdateParticipantQuestionDto) {
    return this.participantQuestionsService.update(+id, updateParticipantQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantQuestionsService.remove(+id);
  }
}
