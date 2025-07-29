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
import { PurchasingService } from './purchasing.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@ApiTags('purchasing')
@Controller('purchase-orders')
export class PurchasingController {
  constructor(private readonly purchasingService: PurchasingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new purchase order' })
  @ApiResponse({ status: 201, description: 'Purchase order created successfully' })
  create(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchasingService.create(createPurchaseOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all purchase orders' })
  @ApiResponse({ status: 200, description: 'List of all purchase orders' })
  findAll(@Query('supplierId') supplierId?: string) {
    return this.purchasingService.findAll(supplierId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific purchase order by ID' })
  @ApiResponse({ status: 200, description: 'Purchase order details' })
  @ApiResponse({ status: 404, description: 'Purchase order not found' })
  findOne(@Param('id') id: string) {
    return this.purchasingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a purchase order' })
  @ApiResponse({ status: 200, description: 'Purchase order updated successfully' })
  @ApiResponse({ status: 404, description: 'Purchase order not found' })
  update(
    @Param('id') id: string,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto,
  ) {
    return this.purchasingService.update(id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a purchase order' })
  @ApiResponse({ status: 200, description: 'Purchase order deleted successfully' })
  @ApiResponse({ status: 404, description: 'Purchase order not found' })
  remove(@Param('id') id: string) {
    return this.purchasingService.remove(id);
  }
}