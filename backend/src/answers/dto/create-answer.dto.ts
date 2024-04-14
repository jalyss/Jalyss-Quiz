import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean,IsString,  } from 'class-validator';

export class CreateAnswerDto {
    @ApiProperty()
    @IsString()
    answer : string
    @ApiProperty()
    @IsBoolean()
    isTrue : boolean
}
