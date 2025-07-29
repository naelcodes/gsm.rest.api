import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll(filters: {
    category?: string;
    status?: string;
    lowStock?: boolean;
  }) {
    const where: any = {};
    
    if (filters.category) {
      where.category = filters.category;
    }
    
    if (filters.status) {
      where.status = filters.status;
    }
    
    if (filters.lowStock) {
      where.stock = {
        lte: { 
          minThreshold: true 
        }
      };
    }

    return this.prisma.product.findMany({
      where,
      include: {
        purchaseOrderItems: true,
        salesTransactions: true,
      },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        purchaseOrderItems: true,
        salesTransactions: true,
      },
    });
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.product.delete({
      where: { id },
    });
  }
}