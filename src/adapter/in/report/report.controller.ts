import { Controller, Get } from '@nestjs/common';

@Controller('report')
export class ReportController {
    @Get()
    async getReportFile() {
        return 'Report file';
    }
}
