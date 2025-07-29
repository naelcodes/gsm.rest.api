import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreatePurchaseOrderDto {
  @ApiProperty({ description: 'Unique identifier for the purchase order' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Supplier ID', required: false })
  @IsOptional()
  @IsString()
  supplierId?: string;

  @ApiProperty({ description: 'Order date', required: false })
  @IsOptional()
  @IsDateString()
  orderDate?: string;

  @ApiProperty({ description: 'Expected delivery date', required: false })
  @IsOptional()
  @IsDateString()
  expectedDelivery?: string;

  @ApiProperty({ description: 'Order notes', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}