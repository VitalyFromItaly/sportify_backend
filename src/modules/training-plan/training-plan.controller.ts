import { Body, Controller, HttpCode, Post, Request } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from '~/app.utils';
import { TCommandResult } from '../../app.types';
import { RemoteCreateTrainingPlanCommand } from './application/commands/create-training-plan.command';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';

@ApiTags('TrainingPlan')
@Controller('training-plan')
export class TrainingPlanController {
  constructor(
    // private readonly userService: UserService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post('/create')
  @ApiOperation({ operationId: 'create' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'new training plan create', type: CreateTrainingPlanDto })
  @ApiCreatedResponse({ type: CreateTrainingPlanDto })
  @HttpCode(201)
  async createTrainingPlan(@Request() req: Request, @Body(SETTINGS.VALIDATION_PIPE) newPlan: CreateTrainingPlanDto): Promise<TCommandResult> {
    return await this.commandBus.execute<RemoteCreateTrainingPlanCommand, TCommandResult>(
      // @ts-ignore
      new RemoteCreateTrainingPlanCommand(newPlan, req.user.id),
    );

  }

}
