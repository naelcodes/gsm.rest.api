import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateMarginAnalysisDto {
  @ApiProperty({ description: 'Unique identifier for the margin analysis' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Analysis start date', required: false })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({ description: 'Analysis end date', required: false })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ description: 'Total revenue', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalRevenue?: number;

  @ApiProperty({ description: 'Total cost', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalCost?: number;

  @ApiProperty({ description: 'Gross margin', required: false })
  @IsOptional()
  @IsNumber()
  grossMargin?: number;

  @ApiProperty({ description: 'Margin rate', required: false })
  @IsOptional()
  @IsNumber()
  marginRate?: number;
}