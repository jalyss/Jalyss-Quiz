import { ApiProperty } from '@nestjs/swagger';
import { IsEmail,IsNumber, IsString} from 'class-validator';


export class CreateParticipantDto {
    @ApiProperty()
    @IsString()
    fullName : string
    @ApiProperty()
    @IsNumber()
    age : number
    @ApiProperty()
    @IsEmail()
    email : string
    @ApiProperty()
    @IsString()
    Reading_Time : string
    @ApiProperty()
    @IsString()
    PhoneNumber : string
}
