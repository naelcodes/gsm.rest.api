import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateMaintenanceInterventionDto } from './create-maintenance-intervention.dto';

export class UpdateMaintenanceInterventionDto extends PartialType(
  OmitType(CreateMaintenanceInterventionDto, ['id'] as const)
) {}