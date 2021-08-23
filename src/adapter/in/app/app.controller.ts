import { Controller, Get } from '@nestjs/common';
import { AppAdapter } from 'src/adapter/out/app/app.adapter';

@Controller()
export class AppController {
    constructor(private readonly adapter: AppAdapter) {}

    @Get()
    getHello(): Promise<any> {
        return this.adapter.getData();
    }
}
