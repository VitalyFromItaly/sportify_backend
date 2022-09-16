export type THttpStatus = 'success' | 'error';
export enum EHttpStatus {
  SUCCESS = 'success',
  ERROR = 'error'
}

export type THttpResponse = { status: THttpStatus, statusCode: number };

export interface IResponseWrapper<T> { 
  status: string;
  statusCode: number;
  data: T
}