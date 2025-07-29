import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Unique identifier for the product' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Product name', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Product category', required: false })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({ description: 'Unit of measurement', required: false })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiProperty({ description: 'Current stock quantity', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  stock?: number;

  @ApiProperty({ description: 'Minimum stock threshold', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minThreshold?: number;

  @ApiProperty({ description: 'Product status', required: false })
  @IsOptional()
  @IsString()
  status?: string;
}