import { ApiProperty } from '@nestjs/swagger';
import { ActivityEntity } from '~/modules/activity/entities/activity.entity';
import { TLocaleSelectOption } from '../dictionary.domain';
import { AbstractSelectDto } from './select.dto';
export class DictionaryDto {
  @ApiProperty({
    description: 'goals',
    type: [AbstractSelectDto]
  })
  goals: TLocaleSelectOption[];

  @ApiProperty({ description: 'activities', type: [ActivityEntity] })
  activities: ActivityEntity[];

  @ApiProperty({ description: 'activity types', type: [AbstractSelectDto] })
  activity_types: TLocaleSelectOption[];
}

