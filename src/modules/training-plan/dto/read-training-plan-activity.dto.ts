import { ApiProperty } from '@nestjs/swagger';

export class ReadTrainingPlanActivityDto {
  @ApiProperty({
    description: 'training activity uniq id',
    example: 45
  })
  id: number;

  @ApiProperty({ description: 'date user start the activity', nullable: false })
  start_date: Date;

  @ApiProperty({ description: 'date user end the activity', nullable: false })
  end_date: Date;

  @ApiProperty({ description: 'link training plan ID', nullable: false })
  trainingPlanId: number;

  @ApiProperty({ description: 'link activity ID', nullable: false })
  activityId: number;

  @ApiProperty({ description: 'extra data for the activity', nullable: true })
  extra: any;

  @ApiProperty({ description: 'comment the activity', nullable: true })
  comment: string;
}


