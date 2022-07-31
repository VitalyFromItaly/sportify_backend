import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';
import { Match } from 'src/common/decorators/match.decorator';

export class CreateUserDto {
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

  @ApiProperty({
    description: 'user`s password confirmation',
    example: 'awesomePassword123!@#'
  })
  @IsNotEmpty()
  @Length(6, 32)
  @Match(CreateUserDto, (user) => user.password, { message: "'password' and 'password confirm' fields don't match" })
  password_confirm: string;
}