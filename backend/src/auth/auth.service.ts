import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto, LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async login(dto: LoginDto) {
    // const admin = await this.prisma.admin.findUnique({
    //   where: {
    //     email: dto.email,
    //   },
    // });
    // if (!admin) {
    //   throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
    // }
    // const { password, ...rest } = admin;
    // if (await bcrypt.compare(dto.password, password)) {
    //   const token = this.jwtService.sign(rest);
    //   return token;
    // } else {
    //   throw new BadRequestException('invalid Email')
    // }
  }

  async getMyInfo(token: string) {
    const myInfo = this.jwtService.decode(token);
    return myInfo;
  }

  async updateMe(dto: UpdateAuthDto, id: number) {
    // if (dto.email) {
    //   const admin = await this.prisma.admin.findUnique({
    //     where: {
    //       email: dto.email,
    //     },
    //   });
    //   if (!admin) {
    //     throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
    //   }
    // }
    // const admin = await this.prisma.admin.update({
    //   where: { id: id },
    //   data: dto,
    // });
    // const { password, ...rest } = admin;
    // const token = this.jwtService.sign(rest);
    // return token
  }

  
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

}
