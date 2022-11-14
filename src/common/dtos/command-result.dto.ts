import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { EHttpStatus } from '../types/Http';

export class CommandResult {
  @ApiProperty({ description: 'id of created object' })
  @IsNotEmpty()
  id?: number;
  
  @ApiProperty({
    description: 'response status: success | error',
    example: EHttpStatus.SUCCESS,
    enum: EHttpStatus,
    enumName: 'EHttpStatus'
  })
  @IsOptional()
  status?: EHttpStatus;

  constructor(id?: number, status?: EHttpStatus) {
    this.id = id;
    this.status = status;
  }
}
