import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WheelPropositionsService } from './wheel-propositions.service';
import { CreateWheelPropositionDto } from './dto/create-wheel-proposition.dto';
import { UpdateWheelPropositionDto } from './dto/update-wheel-proposition.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wheel-propositions')
@Controller('wheel-propositions')
export class WheelPropositionsController {
  constructor(
    private readonly wheelPropositionsService: WheelPropositionsService,
  ) {}

  @Post()
  create(@Body() createWheelPropositionDto: CreateWheelPropositionDto) {
    return this.wheelPropositionsService.create(createWheelPropositionDto);
  }

  @Get()
  findAll() {
    return this.wheelPropositionsService.findAll();
  }
  @Get('isActive')
  findAllIsActive() {
    return this.wheelPropositionsService.findAllIsActive();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.wheelPropositionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWheelPropositionDto: UpdateWheelPropositionDto,
  ) {
    return this.wheelPropositionsService.update(+id, updateWheelPropositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wheelPropositionsService.remove(+id);
  }
}
