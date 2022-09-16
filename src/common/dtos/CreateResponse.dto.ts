import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { EHttpStatus } from 'src/common/types/Http';

export class CreateResponse {
  @ApiProperty({
    description: 'response status: success | error',
    example: 'success',
    enum: EHttpStatus,
    enumName: 'EHttpStatus'
  })
  @IsNotEmpty()
  status: EHttpStatus;

  @ApiProperty({
    description: 'status code',
    example: 201
  })
  @IsNumber()
  statusCode: number;

}