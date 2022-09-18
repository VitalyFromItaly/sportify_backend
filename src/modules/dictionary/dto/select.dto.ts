import { ApiProperty } from '@nestjs/swagger';

export class AbstractSelectDto {
  @ApiProperty()
  value: string | number;

  @ApiProperty()
  text_en: string;

  @ApiProperty()
  text_ru: string;
}