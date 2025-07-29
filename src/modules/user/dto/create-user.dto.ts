import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsDateString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Unique identifier for the user' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Full name of the user', required: false })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty({ description: 'Email address', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'User roles', required: false })
  @IsOptional()
  @IsString()
  roles?: string;

  @ApiProperty({ description: 'User status', required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'Last login date', required: false })
  @IsOptional()
  @IsDateString()
  lastLogin?: string;
}