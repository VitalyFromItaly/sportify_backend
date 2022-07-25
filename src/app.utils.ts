import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
export const REGEX = {
  PASSWORD_RULE
};

const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper, 1 lowercase letter, 1 number, and at least 8 character';
export const MESSAGES = {
  PASSWORD_RULE_MESSAGE
};

const VALIDATION_PIPE = new ValidationPipe({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY });
export const SETTINGS = {
  VALIDATION_PIPE
};