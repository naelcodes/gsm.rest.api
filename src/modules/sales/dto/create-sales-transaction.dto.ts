import { ApiProperty } from '@nestjs/swagger';
import { 
  IsString, 
  IsNumber, 
  IsOptional, 
  IsDateString, 
  Min, 
  IsInt 
} from 'class-validator';

export class CreateSalesTransactionDto {
  @ApiProperty({ description: 'Unique identifier for the transaction' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Employee ID who made the sale', required: false })
  @IsOptional()
  @IsString()
  employeeId?: string;

  @ApiProperty({ description: 'Transaction date', required: false })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ description: 'Work shift number', required: false })
  @IsOptional()
  @IsInt()
  shift?: number;

  @ApiProperty({ description: 'Volume sold in liters', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  volume?: number;

  @ApiProperty({ description: 'Total transaction amount', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiProperty({ description: 'Product ID sold', required: false })
  @IsOptional()
  @IsString()
  productId?: string;

  @ApiProperty({ description: 'Client account ID', required: false })
  @IsOptional()
  @IsString()
  clientAccountId?: string;

  @ApiProperty({ description: 'Pump ID used', required: false })
  @IsOptional()
  @IsString()
  pumpId?: string;

  @ApiProperty({ description: 'Payment method used', required: false })
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @ApiProperty({ description: 'Unit price per liter', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  unitPrice?: number;

  @ApiProperty({ description: 'Discount applied', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  discount?: number;
}