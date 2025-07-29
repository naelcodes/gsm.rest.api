import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateMaintenanceInterventionDto {
  @ApiProperty({ description: 'Unique identifier for the maintenance intervention' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Intervention date', required: false })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ description: 'Equipment being maintained', required: false })
  @IsOptional()
  @IsString()
  equipment?: string;

  @ApiProperty({ description: 'Description of the intervention', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Type of maintenance', required: false })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({ description: 'Technician performing the work', required: false })
  @IsOptional()
  @IsString()
  technician?: string;

  @ApiProperty({ description: 'Intervention status', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}