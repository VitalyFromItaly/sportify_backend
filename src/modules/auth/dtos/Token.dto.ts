import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TokenDto {
  @ApiProperty({
    description: 'access token'
  })
  @IsJWT()
  @IsNotEmpty()
  access_token: string;

  @ApiProperty({
    description: 'access token'
  })
  @IsJWT()
  @IsNotEmpty()
  @IsOptional()
  refresh_token?: string;

  @ApiProperty({
    description: 'when token will be expired',
    example: 1243464554
  })
  @IsNotEmpty()
  @IsNumber()
  expires_in: number;
}  
