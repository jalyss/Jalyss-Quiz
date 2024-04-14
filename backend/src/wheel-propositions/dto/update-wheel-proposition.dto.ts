import { PartialType } from '@nestjs/swagger';
import { CreateWheelPropositionDto } from './create-wheel-proposition.dto';

export class UpdateWheelPropositionDto extends PartialType(CreateWheelPropositionDto) {}
