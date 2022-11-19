import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTrainingPlanActivityDto {
  @ApiProperty({ description: 'date user start the activity', nullable: false })
  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @ApiProperty({ description: 'date user end the activity', nullable: false })
  @IsDateString()
  @IsNotEmpty()
  end_date: Date;

  @ApiProperty({ description: 'link training plan ID', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  trainingPlanId: number;

  @ApiProperty({ description: 'link activity ID', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  activityId: number;

  @ApiProperty({ description: 'extra data for the activity', nullable: true })
  @IsOptional()
  @IsObject()
  extra: any;

  @ApiProperty({ description: 'comment the activity', nullable: true })
  @IsOptional()
  @IsString()
  comment: string;
}


