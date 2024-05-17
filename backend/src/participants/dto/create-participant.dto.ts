import { ApiProperty } from '@nestjs/swagger';
import { Gendre } from '@prisma/client';
import { IsDate, IsEmail,IsNumber, IsString} from 'class-validator';


export class CreateParticipantDto {
    @ApiProperty()
    @IsString()
    fullName : string
    @ApiProperty()
    @IsString()
    work : string
    @ApiProperty()
    @IsEmail()
    email : string
    @ApiProperty()
    @IsDate()
    birthday : Date
    @ApiProperty()
    @IsString()
    phoneNumber : string
    @ApiProperty()
    @IsNumber()
    wheelPropositionId? : number
    @ApiProperty()
    gender? : Gendre
    @ApiProperty()
    app? : string
}
