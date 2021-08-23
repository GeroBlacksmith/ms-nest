import { Provider } from '@nestjs/common';
import { ReportPort } from 'src/application/port/in/report.port';
import { ReportFacade } from 'src/application/usecase/report/report.facade';
import { ReportUsecase } from 'src/application/usecase/report/report.usecase';

const useCaseConfig: Provider[] = [
    {
        provide: ReportPort,
        inject: [ReportUsecase],
        useFactory: (reportUseCase: ReportUsecase) => new ReportFacade(reportUseCase),
    },
    {
        provide: ReportUsecase,
        inject: [],
        useFactory: () => new ReportUsecase(),
    },
];

export default useCaseConfig;
