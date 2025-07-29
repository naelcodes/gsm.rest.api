import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateTankDto {
  @ApiProperty({ description: 'Unique identifier for the tank' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Tank name', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Type of fuel stored', required: false })
  @IsOptional()
  @IsString()
  fuelType?: string;

  @ApiProperty({ description: 'Current fuel level in liters', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  currentLevel?: number;

  @ApiProperty({ description: 'Maximum tank capacity in liters', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  capacity?: number;

  @ApiProperty({ description: 'Security threshold level', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  securityThreshold?: number;

  @ApiProperty({ description: 'Current temperature in Celsius', required: false })
  @IsOptional()
  @IsNumber()
  temperature?: number;

  @ApiProperty({ description: 'Tank operational status', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}