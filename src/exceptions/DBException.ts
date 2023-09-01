import { HttpException } from '@nestjs/common';
import { ValidationErrorItem } from 'sequelize';

export class DBException extends HttpException {
  errorName: string;
  errorItems: ValidationErrorItem[];

  constructor(message: string, statusCode: number, error: any) {
    super(message, statusCode);

    this.errorName = error?.name;
    if (error?.errors?.length) {
      this.errorItems = error.errors?.map((el: any) => ({
        message: el?.message,
        type: el?.type,
        path: el?.path,
        value: el?.value,
        validatorKey: el?.validatorKey
      }));
    }
  }
}
