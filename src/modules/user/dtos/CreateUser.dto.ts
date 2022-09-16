import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';
import { Match } from 'src/common/decorators/match.decorator';
import { ELanguages } from '../user.domain';

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

  @ApiPropertyOptional({
    description: 'system language',
    enum: ELanguages,
    enumName: 'ELanguages'
  })
  @IsEnum(ELanguages)
  @IsOptional()
  language?: ELanguages;
}