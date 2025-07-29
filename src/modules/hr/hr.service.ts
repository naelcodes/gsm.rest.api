import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import {CreateShiftDto} from './dto/create-shift.dto';
import {UpdateShiftDto} from './dto/update-shift.dto';
import {CreateAttendanceDto} from './dto/create-attendance.dto';
import {CreateAbsenceDto} from './dto/create-absence.dto';

@Injectable()
export class HrService {
  constructor (private prisma: PrismaService) { }

  // Shift Management
  async createShift(createShiftDto: CreateShiftDto) {
    return this.prisma.shift.create({
      data: createShiftDto,
    });
  }

  async findAllShifts(filters: {date?: string; type?: string;}) {
    const where: any = {};

    if (filters.date) {
      where.shiftDate = new Date(filters.date);
    }

    if (filters.type) {
      where.shiftType = filters.type;
    }

    return this.prisma.shift.findMany({
      where,
      include: {
        teamAssignments: {
          include: {
            employee: true,
            pump: true,
          },
        },
        attendances: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {shiftDate: 'desc'},
    });
  }

  async findOneShift(id: string) {
    const shift = await this.prisma.shift.findUnique({
      where: {id},
      include: {
        teamAssignments: {
          include: {
            employee: true,
            pump: true,
          },
        },
        attendances: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!shift) {
      throw new NotFoundException(`Shift with ID ${id} not found`);
    }

    return shift;
  }

  async updateShift(id: string, updateShiftDto: UpdateShiftDto) {
    await this.findOneShift(id);

    return this.prisma.shift.update({
      where: {id},
      data: updateShiftDto,
    });
  }

  async removeShift(id: string) {
    await this.findOneShift(id);

    return this.prisma.shift.delete({
      where: {id},
    });
  }

  // Attendance Management
  async createAttendance(createAttendanceDto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: createAttendanceDto,
      include: {
        user: true,
        shift: true,
      },
    });
  }

  async findAllAttendance(filters: {
    userId?: string;
    shiftId?: string;
    status?: string;
  }) {
    const where: any = {};

    if (filters.userId) {
      where.userId = Number(filters.userId);
    }

    if (filters.shiftId) {
      where.shiftId = Number(filters.shiftId);
    }

    if (filters.status) {
      where.status = filters.status;
    }

    return this.prisma.attendance.findMany({
      where,
      include: {
        user: true,
        shift: true,
      },
    });
  }

  // Absence Management
  async createAbsence(createAbsenceDto: CreateAbsenceDto) {
    return this.prisma.absence.create({
      data: createAbsenceDto,
      include: {
        user: true,
        absenceType: true,
      },
    });
  }

  async findAllAbsences(filters: {
    userId?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const where: any = {};

    if (filters.userId) {
      where.userId = Number(filters.userId);
    }

    if (filters.startDate || filters.endDate) {
      where.startDate = {};
      if (filters.startDate) {
        where.startDate.gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        where.startDate.lte = new Date(filters.endDate);
      }
    }

    return this.prisma.absence.findMany({
      where,
      include: {
        user: true,
        absenceType: true,
      },
    });
  }
}