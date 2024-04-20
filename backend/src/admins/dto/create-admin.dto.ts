import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean,IsEmail,IsString,  } from 'class-validator';

export class CreateAdminDto {
    @IsEmail()
    @ApiProperty()
    email : string 
    @IsString()
    @ApiProperty()
    password : string 
    @ApiProperty()
    @IsString()
    fullName : string
}
