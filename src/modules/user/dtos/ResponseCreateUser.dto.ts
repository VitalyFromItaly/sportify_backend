import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { THttpStatus } from 'src/common/types/Http';

export class ResponseCreateUser {
  @ApiProperty({
    description: 'response status: success | error',
    example: 'success'
  })
  @IsNotEmpty()
  status: THttpStatus;

  @ApiProperty({
    description: 'status code',
    example: 201
  })
  @IsNumber()
  statusCode: number;

}