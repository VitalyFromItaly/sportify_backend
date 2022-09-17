"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('db', () => ({
    type: 'mysql',
    environment: process.env.NODE_ENV || 'development',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'sportify',
    synchronize: process.env.DATABASE_SYNCHRONIZE || true
}));
//# sourceMappingURL=config.js.map