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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MaintenanceService } from './maintenance.service';
import { CreateMaintenanceInterventionDto } from './dto/create-maintenance-intervention.dto';
import { UpdateMaintenanceInterventionDto } from './dto/update-maintenance-intervention.dto';

@ApiTags('maintenance')
@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new maintenance intervention' })
  @ApiResponse({ status: 201, description: 'Maintenance intervention created successfully' })
  create(@Body() createMaintenanceInterventionDto: CreateMaintenanceInterventionDto) {
    return this.maintenanceService.create(createMaintenanceInterventionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all maintenance interventions' })
  @ApiResponse({ status: 200, description: 'List of all maintenance interventions' })
  findAll(
    @Query('equipment') equipment?: string,
    @Query('status') status?: string,
    @Query('type') type?: string,
  ) {
    return this.maintenanceService.findAll({ equipment, status, type });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific maintenance intervention by ID' })
  @ApiResponse({ status: 200, description: 'Maintenance intervention details' })
  @ApiResponse({ status: 404, description: 'Maintenance intervention not found' })
  findOne(@Param('id') id: string) {
    return this.maintenanceService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a maintenance intervention' })
  @ApiResponse({ status: 200, description: 'Maintenance intervention updated successfully' })
  @ApiResponse({ status: 404, description: 'Maintenance intervention not found' })
  update(
    @Param('id') id: string,
    @Body() updateMaintenanceInterventionDto: UpdateMaintenanceInterventionDto,
  ) {
    return this.maintenanceService.update(id, updateMaintenanceInterventionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a maintenance intervention' })
  @ApiResponse({ status: 200, description: 'Maintenance intervention deleted successfully' })
  @ApiResponse({ status: 404, description: 'Maintenance intervention not found' })
  remove(@Param('id') id: string) {
    return this.maintenanceService.remove(id);
  }
}