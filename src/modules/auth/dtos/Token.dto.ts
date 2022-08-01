import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty, IsNumber } from 'class-validator';

export class TokenDto {
  @ApiProperty({
    description: 'access token'
  })
  @IsJWT()
  @IsNotEmpty()
  access_token: string;

  @ApiProperty({
    description: 'user`s password',
    example: 'awesomePassword123!@#'
  })
  @IsNotEmpty()
  @IsNumber()
  expires_in: number;
}  
