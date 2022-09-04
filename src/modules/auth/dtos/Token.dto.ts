import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { User } from 'src/modules/user/user.entity';

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
    description: 'when access_token will be expired',
    example: 1243464554
  })
  @IsNotEmpty()
  @IsNumber()
  access_token_expires_in: number;

  @ApiProperty({
    description: 'when refresh_token will be expired',
    example: 1243464554
  })
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  refresh_token_expires_in?: number;

  // @ApiProperty({ description: 'user info' })
  // user?: User;
}  
