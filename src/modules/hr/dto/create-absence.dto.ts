import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsOptional, IsDateString, IsString, IsUUID} from 'class-validator';

export class CreateAbsenceDto {
  @ApiProperty({description: 'Absence record ID'})
  @IsString()
  id: string;

  @ApiProperty({description: 'User ID'})
  @IsString()
  userId: string;

  @ApiProperty({description: 'Absence type ID'})
  @IsString()
  absenceTypeId: string;

  @ApiProperty({description: 'Absence start date', required: false})
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({description: 'Absence end date', required: false})
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({description: 'Reason for absence', required: false})
  @IsOptional()
  @IsString()
  reason?: string;

  @ApiProperty({description: 'Justification document', required: false})
  @IsOptional()
  @IsString()
  justification?: string;
}