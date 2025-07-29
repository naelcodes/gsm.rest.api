import { PartialType } from '@nestjs/swagger';
import { CreateTankDto } from './create-tank.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateTankDto extends PartialType(
  OmitType(CreateTankDto, ['id'] as const)
) {}