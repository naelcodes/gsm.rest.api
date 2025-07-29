import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDateString, IsInt, Min } from 'class-validator';

export class CreateActivityReportDto {
  @ApiProperty({ description: 'Unique identifier for the activity report' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Report start date', required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ description: 'Report end date', required: false })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ description: 'Total volume sold', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalVolume?: number;

  @ApiProperty({ description: 'Total amount earned', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalAmount?: number;

  @ApiProperty({ description: 'Total number of transactions', required: false })
  @IsOptional()
  @IsInt()
  @Min(0)
  totalTransactions?: number;
}