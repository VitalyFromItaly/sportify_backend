import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'refresh token'
  })
  @IsJWT()
  @IsNotEmpty()
  refresh_token: string;
}  
