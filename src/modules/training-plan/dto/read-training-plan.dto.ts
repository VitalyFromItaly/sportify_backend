import { ApiProperty } from '@nestjs/swagger';
import { Max, Min } from 'class-validator';
import { Activity } from '~/modules/activity/entities/activity.entity';
import { EGoal } from '~/modules/dictionary/dictionary.domain';

export class ReadTrainingPlanDto {
  @ApiProperty({
    description: 'plan`s uniq id',
    example: 45
  })  
  id: number;

  @ApiProperty({
    description: 'user`s training goal',
    example: EGoal.WEIGHT_REDUCTION,
    nullable: false,
    maximum: 3,
    minimum: 0
  })
  @Min(EGoal.WEIGHT_REDUCTION)
  @Max(EGoal.COMPETITION_PREPARATION)
  goal: EGoal;

  // @ApiProperty({ description: 'user id' })
  // user_id: number;

  @ApiProperty({ description: 'date user start the plan' })
  start_date: Date;

  @ApiProperty({ description: 'durations of the plan', minimum: 1, maximum: 6 })
  duration: number;

  @ApiProperty({ description: 'user plan activities', type: [Activity] })
  activities?: Activity[];
  
  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  created_at: Date;

  @ApiProperty({
    description: 'date user was created',
    example: '2022-07-31 22:13:20.794424'
  })
  updated_at: Date;
}