declare const _default: (() => {
    type: string;
    environment: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: string | boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    environment: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: string | boolean;
}>;
export default _default;
