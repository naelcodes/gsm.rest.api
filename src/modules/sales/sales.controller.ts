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
import { SalesService } from './sales.service';
import { CreateSalesTransactionDto } from './dto/create-sales-transaction.dto';
import { UpdateSalesTransactionDto } from './dto/update-sales-transaction.dto';

@ApiTags('sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sales transaction' })
  @ApiResponse({ status: 201, description: 'Transaction created successfully' })
  create(@Body() createSalesTransactionDto: CreateSalesTransactionDto) {
    return this.salesService.create(createSalesTransactionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales transactions' })
  @ApiResponse({ status: 200, description: 'List of all transactions' })
  findAll(
    @Query('employeeId') employeeId?: string,
    @Query('productId') productId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.salesService.findAll({
      employeeId,
      productId,
      startDate,
      endDate,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific sales transaction by ID' })
  @ApiResponse({ status: 200, description: 'Transaction details' })
  @ApiResponse({ status: 404, description: 'Transaction not found' })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a sales transaction' })
  @ApiResponse({ status: 200, description: 'Transaction updated successfully' })
  @ApiResponse({ status: 404, description: 'Transaction not found' })
  update(
    @Param('id') id: string,
    @Body() updateSalesTransactionDto: UpdateSalesTransactionDto,
  ) {
    return this.salesService.update(id, updateSalesTransactionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a sales transaction' })
  @ApiResponse({ status: 200, description: 'Transaction deleted successfully' })
  @ApiResponse({ status: 404, description: 'Transaction not found' })
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}