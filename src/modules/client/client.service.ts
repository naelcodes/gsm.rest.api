import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientAccountDto } from './dto/create-client-account.dto';
import { UpdateClientAccountDto } from './dto/update-client-account.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(createClientAccountDto: CreateClientAccountDto) {
    return this.prisma.clientAccount.create({
      data: createClientAccountDto,
    });
  }

  async findAll(filters: { status?: string; type?: string }) {
    const where: any = {};
    
    if (filters.status) {
      where.status = filters.status;
    }
    
    if (filters.type) {
      where.type = filters.type;
    }

    return this.prisma.clientAccount.findMany({
      where,
      include: {
        salesTransactions: true,
        accountStatements: true,
        invoices: true,
      },
    });
  }

  async findOne(id: string) {
    const clientAccount = await this.prisma.clientAccount.findUnique({
      where: { id },
      include: {
        salesTransactions: {
          include: {
            employee: true,
            product: true,
            pump: true,
          },
        },
        accountStatements: {
          include: {
            accountStatementLines: true,
          },
        },
        invoices: true,
      },
    });
    
    if (!clientAccount) {
      throw new NotFoundException(`Client account with ID ${id} not found`);
    }
    
    return clientAccount;
  }

  async update(id: string, updateClientAccountDto: UpdateClientAccountDto) {
    await this.findOne(id);
    
    return this.prisma.clientAccount.update({
      where: { id },
      data: updateClientAccountDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.clientAccount.delete({
      where: { id },
    });
  }
}