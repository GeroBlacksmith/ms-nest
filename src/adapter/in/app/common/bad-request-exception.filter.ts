import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { StatusCodeString } from 'src/domain/error/status-code-string.enum';
import { ErrorConstant } from 'src/domain/error/error.constant';

@Catch(BadRequestException)
export class BadRequestExceptionsFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus();

    console.error("Error in path: " + request.url + ". Status: " + status + ". Timestamp: " + new Date().toISOString());
    let result: any = exception.getResponse();
    console.error("Response Found:", result);
    let messageResult = result.message;

    response.status(status).json({
      name: StatusCodeString.BAD_REQUEST,
      message: ErrorConstant.MESSAGE_EXPLANATION_BAD_REQUEST.concat(messageResult.join(' - '))
    });
  }
}
