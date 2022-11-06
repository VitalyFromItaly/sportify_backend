import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { EGoal } from '~/modules/dictionary/dictionary.domain';

export class CreateTrainingPlanDto {
  @ApiProperty({
    description: 'user`s training goal',
    example: EGoal.WEIGHT_REDUCTION,
    nullable: false,
    minimum: 0,
    maximum: 3
  })
  @IsEnum(EGoal)
  @IsNotEmpty()
  goal: EGoal;

  @ApiProperty({ description: 'date user start the plan', nullable: false })
  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @ApiProperty({ description: 'durations of the plan', minimum: 1, maximum: 6 })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(6)
  duration: number;
}


