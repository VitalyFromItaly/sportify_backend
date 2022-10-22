import { ApiProperty } from '@nestjs/swagger';
import { Activity } from '~/modules/activity/entities/activity.entity';
import { TLocaleSelectOption } from '../dictionary.domain';
import { AbstractSelectDto } from './select.dto';
export class DictionaryDto {
  @ApiProperty({
    description: 'goals',
    type: [AbstractSelectDto]
  })
  goals: TLocaleSelectOption[];

  @ApiProperty({ description: 'activities', type: [Activity] })
  activities: Activity[];

  @ApiProperty({ description: 'activity types', type: [AbstractSelectDto] })
  activity_types: TLocaleSelectOption[];
}

