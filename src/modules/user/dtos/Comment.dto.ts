import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, Length } from 'class-validator';


export class CommentDto {
  @ApiProperty({
    description: 'user comment in user profile settings',
    example: 'your app is awesome',
    type: 'string'
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 250)
  comment: string;
}