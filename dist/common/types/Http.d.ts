export declare type THttpStatus = 'success' | 'error';
export declare enum EHttpStatus {
    SUCCESS = "success",
    ERROR = "error"
}
export declare type THttpResponse = {
    status: THttpStatus;
    statusCode: number;
};
export interface IResponseWrapper<T> {
    status: string;
    statusCode: number;
    data: T;
}
