import { Body, Controller, Get, HttpCode, Param, Post, Req, Request } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from '~/app.utils';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { TCommandResult } from '~/app.types';
import { User } from '../user/entities/user.entity';
import { CreateTrainingPlanActivityDto } from '~/modules/training-plan/dto/create-training-plan-activity.dto';
import { WsAction } from '@drozd/nestjs-ws-api';
import {
  CreateTrainingPlanActivityCommand
} from '~/modules/training-plan/application/commands/create-training-plan-activity.command';
import { ReadTrainingPlanActivityDto } from '~/modules/training-plan/dto/read-training-plan-activity.dto';
import GetOneTrainingActivityQuery from '~/modules/training-plan/application/queries/get-one-training-activity.query';

const NAMESPACE = 'training-plan-activity';

@ApiTags('TrainingPlanActivity')
@Controller('training-plan-activity')
export class TrainingPlanActivityController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post('/create')
  @ApiOperation({ operationId: 'create' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'new training activity create', type: CommandResult })
  @ApiCreatedResponse({ type: CommandResult })
  @HttpCode(201)
  @WsAction(NAMESPACE)
  async create(
    @Body(SETTINGS.VALIDATION_PIPE) activityDto: CreateTrainingPlanActivityDto,
    @Request() { user } : { user: User }
  ): Promise<TCommandResult> {
    return await this.commandBus.execute<CreateTrainingPlanActivityCommand, TCommandResult>(
      new CreateTrainingPlanActivityCommand(activityDto, user.id),
    );
  }

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'read' })
  @ApiDefaultResponse({ description: 'get training activity by id', type: ReadTrainingPlanActivityDto })
  @HttpCode(200)
  @WsAction(NAMESPACE)
  async read(@Param('id') id: number,  @Req() { user }: { user: User }): Promise<ReadTrainingPlanActivityDto> {
    return await this.queryBus.execute(new GetOneTrainingActivityQuery(id, user.id));
  }
}
