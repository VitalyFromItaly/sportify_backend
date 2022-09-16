import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Activity } from 'src/modules/activity/entities/activity.entity';
import { EGender, EGoal, ELanguages, EUserStatus } from '../user.domain';

export class UpdateUserProfileDto {
  @ApiProperty({
    description: 'user`s uniq id',
    example: 45
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiPropertyOptional({
    description: 'user`s gender',
    example: EGender.FEMALE
    // enum: EGender,
    // enumName: 'EGender'
  })
  @IsOptional()
  @IsEnum(EGender)
  gender?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'user`s height',
    example: 178,
    minimum: 80,
    maximum: 250
  })
  @Min(80)
  @Max(250)
  @IsOptional()
  height?: number;

  @ApiPropertyOptional({
    description: 'user`s weight',
    example: 78,
    minimum: 30,
    maximum: 300
  })
  @Min(30)
  @Max(300)
  @IsOptional()
  weight?: number;

  @ApiPropertyOptional({
    description: 'user`s goal',
    example: EGoal.WEIGHT_MAINTENANCE
    // enum: EGoal,
    // enumName: 'EGoal'
  })
  @IsOptional()
  @Min(EGoal.WEIGHT_REDUCTION)
  @Max(EGoal.COMPETITION_PREPARATION)
  goal?: number;

  @ApiPropertyOptional({
    description: 'user`s age',
    example: new Date(11, 1, 1993),
    nullable: true
  })
  @IsOptional()
  birthday?: Date;

  @ApiPropertyOptional({
    description: 'user status',
    example: EUserStatus.NEW
    // enum: EUserStatus,
    // enumName: 'EUserStatus'
  })
  @Min(EUserStatus.NEW)
  @Max(EUserStatus.KNOWN)
  @IsOptional()
  status?: number;

  @ApiPropertyOptional({ enum: ELanguages, enumName: 'ELanguages' , description: 'user chosen language' })
  @IsOptional()
  language?: ELanguages;

  @ApiPropertyOptional({ description: 'user activities ', type: [Activity] })
  @IsOptional()
  activities?: Activity[];

}