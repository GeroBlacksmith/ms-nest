import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportPort } from 'src/application/port/in/report.port';
import { GenerateFile } from '../csv/decorator/generate-file';

@Controller('report')
export class ReportController {
    constructor(private readonly reportPort: ReportPort) {}
    @Get()
    async getReportFile(@GenerateFile() report, @Res({ passthrough: true }) res: Response) {
        const buffer = await this.reportPort.getReport();
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=example.csv');
        res.setHeader('Content-Length', buffer.length);
        res.send(buffer);
    }
}
