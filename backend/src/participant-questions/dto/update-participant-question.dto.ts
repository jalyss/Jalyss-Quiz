import { PartialType } from '@nestjs/swagger';
import { CreateParticipantQuestionDto } from './create-participant-question.dto';

export class UpdateParticipantQuestionDto extends PartialType(CreateParticipantQuestionDto) {}
