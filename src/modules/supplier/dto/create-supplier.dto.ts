import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({ description: 'Unique identifier for the supplier' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Supplier name', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}