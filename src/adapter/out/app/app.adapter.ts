import { HttpService, Injectable } from '@nestjs/common';
@Injectable()
export class AppAdapter {
    constructor(private readonly http: HttpService) {}
    async getData(): Promise<any> {
        try {
            //const response = await this.http.get('http://localhost:3005/api/v1/order/packages/000122200012012').toPromise();
            return await Promise.resolve("hola");
        } catch (error) {
            console.error('Error ', error);
            return await Promise.reject(error);
        }
    }
}
