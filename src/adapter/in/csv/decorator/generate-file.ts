import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as XLSX from 'xlsx';

export const GenerateFile = createParamDecorator((data: any, ctx: ExecutionContext) => {
    return XLSX.utils.json_to_sheet([
        [1, 2, 3],
        [4, 5],
    ]);
});
