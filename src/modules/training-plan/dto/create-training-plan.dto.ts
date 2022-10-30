import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EGoal } from '~/modules/dictionary/dictionary.domain';

export class CreateTrainingPlanDto {
  @ApiProperty({
    description: 'user`s training goal',
    example: EGoal.WEIGHT_REDUCTION,
    nullable: false
  })
  @IsEnum(EGoal)
  @IsNotEmpty()
  goal: EGoal;

  @ApiProperty({ description: 'date user start the plan', nullable: false })
  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @ApiProperty({ description: 'durations of the plan' })
  @IsNumber()
  @IsNotEmpty()
  duration: number;
}


export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}


