import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Max, Min } from 'class-validator';
import { Activity } from '~/modules/activity/entities/activity.entity';
import { EGoal } from '~/modules/dictionary/dictionary.domain';

export class UpdateTrainingPlanDto {
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
  @IsOptional()
  goal?: EGoal;

  @ApiProperty({ description: 'date user start the plan' })
  @IsOptional()
  start_date?: Date;

  @ApiProperty({ description: 'durations of the plan', minimum: 1, maximum: 6 })
  @IsOptional()
  duration?: number;

  @ApiProperty({ description: 'user plan activities', type: [Activity] })
  @IsOptional()
  activities?: Activity[];
}