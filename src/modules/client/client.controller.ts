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
import { ClientService } from './client.service';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';

@ApiTags('clients')
@Controller('client-accounts')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new client account' })
  @ApiResponse({ status: 201, description: 'Client account created successfully' })
  create(@Body() createClientAccountDto: CreateClientAccountDto) {
    return this.clientService.create(createClientAccountDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all client accounts' })
  @ApiResponse({ status: 200, description: 'List of all client accounts' })
  findAll(
    @Query('status') status?: string,
    @Query('type') type?: string,
  ) {
    return this.clientService.findAll({ status, type });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific client account by ID' })
  @ApiResponse({ status: 200, description: 'Client account details' })
  @ApiResponse({ status: 404, description: 'Client account not found' })
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a client account' })
  @ApiResponse({ status: 200, description: 'Client account updated successfully' })
  @ApiResponse({ status: 404, description: 'Client account not found' })
  update(
    @Param('id') id: string,
    @Body() updateClientAccountDto: UpdateClientAccountDto,
  ) {
    return this.clientService.update(id, updateClientAccountDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a client account' })
  @ApiResponse({ status: 200, description: 'Client account deleted successfully' })
  @ApiResponse({ status: 404, description: 'Client account not found' })
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}