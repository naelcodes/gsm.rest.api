import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchasingService {
  constructor(private prisma: PrismaService) {}

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.prisma.purchasing.create({
      data: createPurchaseOrderDto,
      include: {
        supplier: true,
        purchaseOrderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findAll(supplierId?: string) {
    const where = supplierId ? { supplierId } : {};
    
    return this.prisma.purchasing.findMany({
      where,
      include: {
        supplier: true,
        purchaseOrderItems: {
          include: {
            product: true,
          },
        },
      },
      orderBy: { orderDate: 'desc' },
    });
  }

  async findOne(id: string) {
    const purchaseOrder = await this.prisma.purchasing.findUnique({
      where: { id },
      include: {
        supplier: true,
        purchaseOrderItems: {
          include: {
            product: true,
          },
        },
      },
    });
    
    if (!purchaseOrder) {
      throw new NotFoundException(`Purchase order with ID ${id} not found`);
    }
    
    return purchaseOrder;
  }

  async update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    await this.findOne(id);
    
    return this.prisma.purchasing.update({
      where: { id },
      data: updatePurchaseOrderDto,
      include: {
        supplier: true,
        purchaseOrderItems: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.purchasing.delete({
      where: { id },
    });
  }
}