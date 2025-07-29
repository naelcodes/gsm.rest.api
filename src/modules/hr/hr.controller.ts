import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {ApiTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import {HrService} from './hr.service';
import {CreateShiftDto} from './dto/create-shift.dto';
import {UpdateShiftDto} from './dto/update-shift.dto';
import {CreateAttendanceDto} from './dto/create-attendance.dto';
import {CreateAbsenceDto} from './dto/create-absence.dto';

@ApiTags('hr')
@Controller('hr')
export class HrController {
  constructor (private readonly hrService: HrService) { }

  // Shift Management
  @Post('shifts')
  @ApiOperation({summary: 'Create a new shift'})
  @ApiResponse({status: 201, description: 'Shift created successfully'})
  createShift(@Body() createShiftDto: CreateShiftDto) {
    return this.hrService.createShift(createShiftDto);
  }

  @Get('shifts')
  @ApiOperation({summary: 'Get all shifts'})
  @ApiResponse({status: 200, description: 'List of all shifts'})
  findAllShifts(
    @Query('date') date?: string,
    @Query('type') type?: string,
  ) {
    return this.hrService.findAllShifts({date, type});
  }

  @Get('shifts/:id')
  @ApiOperation({summary: 'Get a specific shift by ID'})
  @ApiResponse({status: 200, description: 'Shift details'})
  @ApiResponse({status: 404, description: 'Shift not found'})
  findOneShift(@Param('id') id: string) {
    return this.hrService.findOneShift(id);
  }

  @Patch('shifts/:id')
  @ApiOperation({summary: 'Update a shift'})
  @ApiResponse({status: 200, description: 'Shift updated successfully'})
  @ApiResponse({status: 404, description: 'Shift not found'})
  updateShift(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
    return this.hrService.updateShift(id, updateShiftDto);
  }

  @Delete('shifts/:id')
  @ApiOperation({summary: 'Delete a shift'})
  @ApiResponse({status: 200, description: 'Shift deleted successfully'})
  @ApiResponse({status: 404, description: 'Shift not found'})
  removeShift(@Param('id') id: string) {
    return this.hrService.removeShift(id);
  }

  // Attendance Management
  @Post('attendance')
  @ApiOperation({summary: 'Create a new attendance record'})
  @ApiResponse({status: 201, description: 'Attendance record created successfully'})
  createAttendance(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.hrService.createAttendance(createAttendanceDto);
  }

  @Get('attendance')
  @ApiOperation({summary: 'Get all attendance records'})
  @ApiResponse({status: 200, description: 'List of all attendance records'})
  findAllAttendance(
    @Query('userId') userId?: string,
    @Query('shiftId') shiftId?: string,
    @Query('status') status?: string,
  ) {
    return this.hrService.findAllAttendance({userId, shiftId, status});
  }

  // Absence Management
  @Post('absences')
  @ApiOperation({summary: 'Create a new absence record'})
  @ApiResponse({status: 201, description: 'Absence record created successfully'})
  createAbsence(@Body() createAbsenceDto: CreateAbsenceDto) {
    return this.hrService.createAbsence(createAbsenceDto);
  }

  @Get('absences')
  @ApiOperation({summary: 'Get all absence records'})
  @ApiResponse({status: 200, description: 'List of all absence records'})
  findAllAbsences(
    @Query('userId') userId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.hrService.findAllAbsences({userId, startDate, endDate});
  }
}