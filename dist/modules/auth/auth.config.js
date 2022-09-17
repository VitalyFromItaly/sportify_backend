"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('auth', () => ({
    secret_key: process.env.SECRET_KEY,
    expires_in: process.env.EXPIRES_IN
}));
//# sourceMappingURL=auth.config.js.map