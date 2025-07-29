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
import { TankService } from './tank.service';
import { CreateTankDto } from './dto/create-tank.dto';
import { UpdateTankDto } from './dto/update-tank.dto';

@ApiTags('tanks')
@Controller('tanks')
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new fuel tank' })
  @ApiResponse({ status: 201, description: 'Tank created successfully' })
  create(@Body() createTankDto: CreateTankDto) {
    return this.tankService.create(createTankDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all fuel tanks' })
  @ApiResponse({ status: 200, description: 'List of all tanks' })
  findAll(@Query('status') status?: string) {
    return this.tankService.findAll(status);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific fuel tank by ID' })
  @ApiResponse({ status: 200, description: 'Tank details' })
  @ApiResponse({ status: 404, description: 'Tank not found' })
  findOne(@Param('id') id: string) {
    return this.tankService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a fuel tank' })
  @ApiResponse({ status: 200, description: 'Tank updated successfully' })
  @ApiResponse({ status: 404, description: 'Tank not found' })
  update(@Param('id') id: string, @Body() updateTankDto: UpdateTankDto) {
    return this.tankService.update(id, updateTankDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a fuel tank' })
  @ApiResponse({ status: 200, description: 'Tank deleted successfully' })
  @ApiResponse({ status: 404, description: 'Tank not found' })
  remove(@Param('id') id: string) {
    return this.tankService.remove(id);
  }
}