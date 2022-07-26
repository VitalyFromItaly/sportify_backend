import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';
import { Match } from 'src/common/decorators/match.decorator';
import { EDominantHand, EGender } from '../user.domain';

export class CreateUserDto {

  @IsNotEmpty({ message: 'user should have a name' })
  @Length(4, 32)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(6, 32)
  @Matches(REGEX.PASSWORD_RULE, {  message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;

  @IsNotEmpty()
  @Length(6, 32)
  @Match(CreateUserDto, (user) => user.password, { message: "'password' and 'password confirm' fields don't match" })
  password_confirm: string;

  @IsNotEmpty()
  @IsEnum(EGender)
  gender: EGender;

  @IsOptional()
  height?: number;

  @IsOptional()
  weight?: number;

  @IsNotEmpty()
  @IsNumber()
  birthday: Date; 

  @IsNotEmpty()
  @IsEnum(EDominantHand)
  dominant_hand: EDominantHand;

}