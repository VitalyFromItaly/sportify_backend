export type THttpStatus = 'success' | 'error';

export type THttpResponse = { status: THttpStatus, statusCode: number };

export interface IResponseWrapper<T> { 
  status: string;
  statusCode: number;
  data: T
}