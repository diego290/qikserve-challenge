export class ResponseModel<T> {
  status: number;
  message: string;
  data?: T;
  errors: boolean;

  constructor(
    status: number,
    message: string,
    errors: boolean,
    data?: any
  ) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.errors = errors;
  }
}
