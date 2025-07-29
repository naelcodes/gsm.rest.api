import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsOptional, IsDateString, IsString, IsUUID} from 'class-validator';

export class CreateShiftDto {
  @ApiProperty({description: 'Shift ID'})
  @IsString()
  id: string;

  @ApiProperty({description: 'Shift date', required: false})
  @IsOptional()
  @IsDateString()
  shiftDate?: string;

  @ApiProperty({description: 'Type of shift', required: false})
  @IsOptional()
  @IsString()
  shiftType?: string;

  @ApiProperty({description: 'Shift start time', required: false})
  @IsOptional()
  @IsString()
  startTime?: string;

  @ApiProperty({description: 'Shift end time', required: false})
  @IsOptional()
  @IsString()
  endTime?: string;

  @ApiProperty({description: 'Shift notes', required: false})
  @IsOptional()
  @IsString()
  notes?: string;
}