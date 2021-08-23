import { ReportPort } from 'src/application/port/in/report.port';
import { ReportUsecase } from './report.usecase';

export class ReportFacade implements ReportPort {
    constructor(private readonly reportUseCase: ReportUsecase) {}
    getReport(): Promise<Buffer> {
        return this.reportUseCase.getReport();
    }
}
