"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.MESSAGES = exports.REGEX = void 0;
const common_1 = require("@nestjs/common");
const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
exports.REGEX = {
    PASSWORD_RULE
};
const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper, 1 special symbol, and at least 8 character';
exports.MESSAGES = {
    PASSWORD_RULE_MESSAGE,
    WRONG_PASSWORD: 'Wrong password',
    USER_NOT_FOUND: 'User not found',
    USER_EXIST: 'There is a user with provided email, please try another one or log in',
    INVALID_TOKEN: 'Invalid token'
};
const VALIDATION_PIPE = new common_1.ValidationPipe({ errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY });
exports.SETTINGS = {
    VALIDATION_PIPE
};
//# sourceMappingURL=app.utils.js.map