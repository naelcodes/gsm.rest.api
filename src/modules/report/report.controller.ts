import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReportService } from './report.service';
import { CreateActivityReportDto } from './dto/create-activity-report.dto';
import { CreateMarginAnalysisDto } from './dto/create-margin-analysis.dto';

@ApiTags('reports')
@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('activity')
  @ApiOperation({ summary: 'Create a new activity report' })
  @ApiResponse({ status: 201, description: 'Activity report created successfully' })
  createActivityReport(@Body() createActivityReportDto: CreateActivityReportDto) {
    return this.reportService.createActivityReport(createActivityReportDto);
  }

  @Get('activity')
  @ApiOperation({ summary: 'Get all activity reports' })
  @ApiResponse({ status: 200, description: 'List of all activity reports' })
  findAllActivityReports(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.findAllActivityReports({ startDate, endDate });
  }

  @Get('activity/:id')
  @ApiOperation({ summary: 'Get a specific activity report by ID' })
  @ApiResponse({ status: 200, description: 'Activity report details' })
  @ApiResponse({ status: 404, description: 'Activity report not found' })
  findOneActivityReport(@Param('id') id: string) {
    return this.reportService.findOneActivityReport(id);
  }

  @Post('margin')
  @ApiOperation({ summary: 'Create a new margin analysis' })
  @ApiResponse({ status: 201, description: 'Margin analysis created successfully' })
  createMarginAnalysis(@Body() createMarginAnalysisDto: CreateMarginAnalysisDto) {
    return this.reportService.createMarginAnalysis(createMarginAnalysisDto);
  }

  @Get('margin')
  @ApiOperation({ summary: 'Get all margin analyses' })
  @ApiResponse({ status: 200, description: 'List of all margin analyses' })
  findAllMarginAnalyses(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.reportService.findAllMarginAnalyses({ startDate, endDate });
  }

  @Get('margin/:id')
  @ApiOperation({ summary: 'Get a specific margin analysis by ID' })
  @ApiResponse({ status: 200, description: 'Margin analysis details' })
  @ApiResponse({ status: 404, description: 'Margin analysis not found' })
  findOneMarginAnalysis(@Param('id') id: string) {
    return this.reportService.findOneMarginAnalysis(id);
  }
}