export class ReportUsecase {
    constructor() {}
    async getReport(): Promise<Buffer> {
        return Buffer.from('1,2,3\n4,5,6\n');
    }
}
