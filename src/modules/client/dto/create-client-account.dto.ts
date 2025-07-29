import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateClientAccountDto {
  @ApiProperty({ description: 'Unique identifier for the client account' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Company name', required: false })
  @IsOptional()
  @IsString()
  companyName?: string;

  @ApiProperty({ description: 'Current account balance', required: false })
  @IsOptional()
  @IsNumber()
  currentBalance?: number;

  @ApiProperty({ description: 'Credit limit', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  creditLimit?: number;

  @ApiProperty({ description: 'Available credit', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  availableCredit?: number;

  @ApiProperty({ description: 'Account status', required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'Account type', required: false })
  @IsOptional()
  @IsString()
  type?: string;
}