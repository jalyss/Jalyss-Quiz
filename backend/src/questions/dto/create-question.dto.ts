import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';


export class CreateQuestionDto {
    @ApiProperty()
    @IsString()
    question : string
    @ApiProperty()
    @IsString()
    imageUrl? : string
    @ApiProperty()
    @IsNumber()
    adminId? : number
    @ApiProperty({required:true})
    @IsNumber()
    levelId : number
}
