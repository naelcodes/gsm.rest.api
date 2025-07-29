import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateClientAccountDto } from './create-client-account.dto';

export class UpdateClientAccountDto extends PartialType(
  OmitType(CreateClientAccountDto, ['id'] as const)
) {}