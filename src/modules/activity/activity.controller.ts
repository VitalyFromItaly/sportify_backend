import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiBearerAuth, ApiDefaultResponse, ApiOperation } from '@nestjs/swagger';
import { ActivityEntity } from '~/modules/activity/entities/activity.entity';
import { ActivityService } from '~/modules/activity/activity.service';
import { WsAction } from '@drozd/nestjs-ws-api';

@Controller('activity')
export class ActivityController {

  constructor(private readonly activityService: ActivityService) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'readAll' })
  @ApiDefaultResponse({ description: 'get all activities', type: [ActivityEntity] })
  @HttpCode(200)
  @WsAction('activity')
  async readAll(): Promise<ActivityEntity[]> {
    return await this.activityService.findAll();
  }
}
