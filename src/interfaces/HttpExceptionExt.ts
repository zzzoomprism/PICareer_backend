import { HttpException } from '@nestjs/common';

interface DBValidationItems {
  message?: string;
  type?: string;
  path?: string;
  value?: string;
  validatorKey?: string;
}

export interface HttpExceptionExt extends HttpException {
  errorName?: string;
  errorItems?: DBValidationItems[];
}
