
import { ApiProperty } from '@nestjs/swagger';
import {IsNumber, IsString } from 'class-validator';
export class CreateParticipantQuestionDto {
    @ApiProperty()
    @IsNumber()
    answerId : number
    @ApiProperty()
    @IsNumber()
    questionId  : number
    @ApiProperty()
    @IsNumber()
    participantId : number
}
