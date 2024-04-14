import { ApiProperty } from '@nestjs/swagger';
import {IsString } from 'class-validator';

export class CreateLevelDto {
    @ApiProperty()
    @IsString()
    type : string
}
