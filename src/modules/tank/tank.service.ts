import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTankDto } from './dto/create-tank.dto';
import { UpdateTankDto } from './dto/update-tank.dto';

@Injectable()
export class TankService {
  constructor(private prisma: PrismaService) {}

  async create(createTankDto: CreateTankDto) {
    return this.prisma.tank.create({
      data: createTankDto,
    });
  }

  async findAll(status?: string) {
    const where = status ? { status } : {};
    return this.prisma.tank.findMany({ where });
  }

  async findOne(id: string) {
    const tank = await this.prisma.tank.findUnique({
      where: { id },
    });
    
    if (!tank) {
      throw new NotFoundException(`Tank with ID ${id} not found`);
    }
    
    return tank;
  }

  async update(id: string, updateTankDto: UpdateTankDto) {
    await this.findOne(id); // Check if exists
    
    return this.prisma.tank.update({
      where: { id },
      data: updateTankDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if exists
    
    return this.prisma.tank.delete({
      where: { id },
    });
  }
}