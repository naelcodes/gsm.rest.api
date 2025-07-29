import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsOptional, IsDateString, IsString, IsUUID} from 'class-validator';

export class CreateAttendanceDto {
  @ApiProperty({description: 'Attendance record ID'})
  @IsString()
  id: string;

  @ApiProperty({description: 'User ID'})
  @IsString()
  userId: string;

  @ApiProperty({description: 'Shift ID'})
  @IsString()
  shiftId: string;

  @ApiProperty({description: 'Arrival time', required: false})
  @IsOptional()
  @IsDateString()
  arrivalTime?: string;

  @ApiProperty({description: 'Departure time', required: false})
  @IsOptional()
  @IsDateString()
  departureTime?: string;

  @ApiProperty({description: 'Attendance status', required: false})
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({description: 'Reason for status', required: false})
  @IsOptional()
  @IsString()
  reason?: string;
}