import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSalesTransactionDto } from './dto/create-sales-transaction.dto';
import { UpdateSalesTransactionDto } from './dto/update-sales-transaction.dto';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async create(createSalesTransactionDto: CreateSalesTransactionDto) {
    return this.prisma.salesTransaction.create({
      data: createSalesTransactionDto,
      include: {
        employee: true,
        product: true,
        clientAccount: true,
        pump: true,
      },
    });
  }

  async findAll(filters: {
    employeeId?: string;
    productId?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const where: any = {};
    
    if (filters.employeeId) {
      where.employeeId = filters.employeeId;
    }
    
    if (filters.productId) {
      where.productId = filters.productId;
    }
    
    if (filters.startDate || filters.endDate) {
      where.date = {};
      if (filters.startDate) {
        where.date.gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        where.date.lte = new Date(filters.endDate);
      }
    }

    return this.prisma.salesTransaction.findMany({
      where,
      include: {
        employee: true,
        product: true,
        clientAccount: true,
        pump: true,
      },
      orderBy: { date: 'desc' },
    });
  }

  async findOne(id: string) {
    const transaction = await this.prisma.salesTransaction.findUnique({
      where: { id },
      include: {
        employee: true,
        product: true,
        clientAccount: true,
        pump: true,
      },
    });
    
    if (!transaction) {
      throw new NotFoundException(`Sales transaction with ID ${id} not found`);
    }
    
    return transaction;
  }

  async update(id: string, updateSalesTransactionDto: UpdateSalesTransactionDto) {
    await this.findOne(id);
    
    return this.prisma.salesTransaction.update({
      where: { id },
      data: updateSalesTransactionDto,
      include: {
        employee: true,
        product: true,
        clientAccount: true,
        pump: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.salesTransaction.delete({
      where: { id },
    });
  }
}