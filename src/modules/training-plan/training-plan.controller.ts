import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Req, Request } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SETTINGS } from '~/app.utils';
import { CommandResult } from '~/common/dtos/command-result.dto';
import { TCommandResult } from '../../app.types';
import { User } from '../user/entities/user.entity';
import { RemoteCreateTrainingPlanCommand } from './application/commands/create-training-plan.command';
import { DeleteTrainingPlanCommand } from './application/commands/delete-training-plan.command';
import { UpdateTrainingPlanCommand } from './application/commands/update-training-plan.command';
import GetAllTrainingPlansQuery from './application/queries/get-all-plans.query';
import GetOneTrainingPlanQuery from './application/queries/get-one-plan.query';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { ReadTrainingPlanDto } from './dto/read-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';

@ApiTags('TrainingPlan')
@Controller('training-plan')
export class TrainingPlanController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post('/create')
  @ApiOperation({ operationId: 'create' })
  @ApiBearerAuth()
  @ApiDefaultResponse({ description: 'new training plan create', type: CommandResult })
  @ApiCreatedResponse({ type: CommandResult })
  @HttpCode(201)
  async createTrainingPlan(@Request() req: Request, @Body(SETTINGS.VALIDATION_PIPE) newPlan: CreateTrainingPlanDto): Promise<TCommandResult> {
    return await this.commandBus.execute<RemoteCreateTrainingPlanCommand, TCommandResult>(
      // @ts-ignore
      new RemoteCreateTrainingPlanCommand(newPlan, req.user.id),
    );
  }

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'readOne' })
  @ApiDefaultResponse({ description: 'get training plan by id', type: ReadTrainingPlanDto })
  @ApiCreatedResponse({ type: ReadTrainingPlanDto })
  @HttpCode(200)
  async readOne(@Param('id') id: number,  @Req() { user }: { user: User }): Promise<ReadTrainingPlanDto> {
    return await this.queryBus.execute(new GetOneTrainingPlanQuery(id, user.id));
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'readAll' })
  @ApiDefaultResponse({ description: 'get all user training plans', type: [ReadTrainingPlanDto] })
  @ApiCreatedResponse({ type: Array<ReadTrainingPlanDto> })
  @HttpCode(200)
  async readAll(@Req() { user }: { user: User }): Promise<ReadTrainingPlanDto[]> {
    return await this.queryBus.execute(new GetAllTrainingPlansQuery(+user.id));
  }

  @Put('/:id')
  @ApiParam({ name: 'id', description: 'training plan id' })
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'update' })
  @ApiCreatedResponse({ type: CommandResult })
  @HttpCode(200)
  public async update(@Param('id') id: number, @Body(SETTINGS.VALIDATION_PIPE) payload: UpdateTrainingPlanDto, @Req() { user }: { user: User }): Promise<TCommandResult> {
    return await this.commandBus.execute<UpdateTrainingPlanCommand, TCommandResult>(
      new UpdateTrainingPlanCommand(+id, payload, user.id)
    );
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', description: 'training plan id to delete' })
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'delete' })
  @ApiCreatedResponse({ type: CommandResult })
  @HttpCode(200)
  public async delete(@Param('id') id: number, @Req() { user }: { user: User }): Promise<TCommandResult> {
    return await this.commandBus.execute<DeleteTrainingPlanCommand, TCommandResult>(
      new DeleteTrainingPlanCommand(+id, user.id)
    );
  }
}
