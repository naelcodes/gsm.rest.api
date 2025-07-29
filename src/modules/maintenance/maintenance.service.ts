import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMaintenanceInterventionDto } from './dto/create-maintenance-intervention.dto';
import { UpdateMaintenanceInterventionDto } from './dto/update-maintenance-intervention.dto';

@Injectable()
export class MaintenanceService {
  constructor(private prisma: PrismaService) {}

  async create(createMaintenanceInterventionDto: CreateMaintenanceInterventionDto) {
    return this.prisma.maintenanceIntervention.create({
      data: createMaintenanceInterventionDto,
    });
  }

  async findAll(filters: {
    equipment?: string;
    status?: string;
    type?: string;
  }) {
    const where: any = {};
    
    if (filters.equipment) {
      where.equipment = { contains: filters.equipment };
    }
    
    if (filters.status) {
      where.status = filters.status;
    }
    
    if (filters.type) {
      where.type = filters.type;
    }

    return this.prisma.maintenanceIntervention.findMany({
      where,
      orderBy: { date: 'desc' },
    });
  }

  async findOne(id: string) {
    const intervention = await this.prisma.maintenanceIntervention.findUnique({
      where: { id },
    });
    
    if (!intervention) {
      throw new NotFoundException(`Maintenance intervention with ID ${id} not found`);
    }
    
    return intervention;
  }

  async update(id: string, updateMaintenanceInterventionDto: UpdateMaintenanceInterventionDto) {
    await this.findOne(id);
    
    return this.prisma.maintenanceIntervention.update({
      where: { id },
      data: updateMaintenanceInterventionDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.maintenanceIntervention.delete({
      where: { id },
    });
  }
}