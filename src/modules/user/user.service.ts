import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  async findAll(status?: string) {
    const where = status ? { status } : {};
    
    return this.prisma.user.findMany({
      where,
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
        salesTransactions: true,
        teamAssignments: true,
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
        salesTransactions: true,
        teamAssignments: {
          include: {
            shift: true,
            pump: true,
          },
        },
        attendances: {
          include: {
            shift: true,
          },
        },
        absences: {
          include: {
            absenceType: true,
          },
        },
      },
    });
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      include: {
        userRoles: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.prisma.user.delete({
      where: { id },
    });
  }
}