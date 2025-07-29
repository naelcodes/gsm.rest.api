import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateSalesTransactionDto } from './create-sales-transaction.dto';

export class UpdateSalesTransactionDto extends PartialType(
  OmitType(CreateSalesTransactionDto, ['id'] as const)
) {}