export abstract class ReportPort {
    abstract getReport(): Promise<Buffer>;
}
