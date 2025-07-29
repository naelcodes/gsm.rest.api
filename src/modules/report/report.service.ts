import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateActivityReportDto } from './dto/create-activity-report.dto';
import { CreateMarginAnalysisDto } from './dto/create-margin-analysis.dto';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  // Activity Reports
  async createActivityReport(createActivityReportDto: CreateActivityReportDto) {
    return this.prisma.activityReport.create({
      data: createActivityReportDto,
    });
  }

  async findAllActivityReports(filters: {
    startDate?: string;
    endDate?: string;
  }) {
    const where: any = {};
    
    if (filters.startDate || filters.endDate) {
      where.startDate = {};
      if (filters.startDate) {
        where.startDate.gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        where.startDate.lte = new Date(filters.endDate);
      }
    }

    return this.prisma.activityReport.findMany({
      where,
      orderBy: { startDate: 'desc' },
    });
  }

  async findOneActivityReport(id: string) {
    const report = await this.prisma.activityReport.findUnique({
      where: { id },
    });
    
    if (!report) {
      throw new NotFoundException(`Activity report with ID ${id} not found`);
    }
    
    return report;
  }

  // Margin Analysis
  async createMarginAnalysis(createMarginAnalysisDto: CreateMarginAnalysisDto) {
    return this.prisma.marginAnalysis.create({
      data: createMarginAnalysisDto,
    });
  }

  async findAllMarginAnalyses(filters: {
    startDate?: string;
    endDate?: string;
  }) {
    const where: any = {};
    
    if (filters.startDate || filters.endDate) {
      where.startDate = {};
      if (filters.startDate) {
        where.startDate.gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        where.startDate.lte = new Date(filters.endDate);
      }
    }

    return this.prisma.marginAnalysis.findMany({
      where,
      orderBy: { startDate: 'desc' },
    });
  }

  async findOneMarginAnalysis(id: string) {
    const analysis = await this.prisma.marginAnalysis.findUnique({
      where: { id },
    });
    
    if (!analysis) {
      throw new NotFoundException(`Margin analysis with ID ${id} not found`);
    }
    
    return analysis;
  }
}