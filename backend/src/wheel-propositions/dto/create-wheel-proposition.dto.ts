import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';




export class CreateWheelPropositionDto {
    @ApiProperty()
    @IsString()
    slogan : string
    @ApiProperty()
    @IsString()
    label : string
    @ApiProperty()
    @IsString()
    reward : string
}
