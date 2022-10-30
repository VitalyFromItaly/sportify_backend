import { Body, Controller, HttpCode, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiDefaultResponse, ApiOperation } from '@nestjs/swagger';
import { SETTINGS } from '~/app.utils';

// @Controller('training-plan')
// export class TrainingPlanController {
//   @Post('/create')
//   @ApiOperation({ operationId: 'create' })
//   @ApiBearerAuth()
//   @ApiDefaultResponse({ description: 'new training plan create', type: CreateResponse })
//   @ApiCreatedResponse({ type: CreateResponse })
//   @HttpCode(201)
//   async leaveComment(@Request() req: any, @Body(SETTINGS.VALIDATION_PIPE) comment: CommentDto): Promise<THttpResponse> {
//     return await this.usersService.createComment(req.user.id, comment.comment);
//   }

// }
