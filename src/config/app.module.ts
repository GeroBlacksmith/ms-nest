import { HttpModule, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from 'src/adapter/in/app/app.controller';
import { BadRequestExceptionsFilter } from 'src/adapter/in/app/common/bad-request-exception.filter';
import { ReportController } from 'src/adapter/in/report/report.controller';
import { AppAdapter } from 'src/adapter/out/app/app.adapter';

@Module({
    imports: [HttpModule],
    controllers: [AppController, ReportController],

    providers: [].concat(AppAdapter, {
        provide: APP_FILTER,
        useClass: BadRequestExceptionsFilter,
    }),
})
export class AppModule {}
