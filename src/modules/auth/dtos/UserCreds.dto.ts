import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from '~/app.utils';

export class UserCredsDto {
  @ApiProperty({
    description: 'user`s email',
    example: 'awesomeemail@gmail.com'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'user`s password',
    example: 'awesomePassword123!@#'
  })
  @IsNotEmpty()
  @Length(6, 32)
  @Matches(REGEX.PASSWORD_RULE, {  message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;
}
