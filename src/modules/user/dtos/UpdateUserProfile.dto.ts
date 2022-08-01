import { ApiProperty } from '@nestjs/swagger';
import {  IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, Length, Max, Min } from 'class-validator';
import { EDominantHand, EGender } from '../user.domain';

export class UpdateUserProfileDto {
  @ApiProperty({
    description: 'user`s uniq id',
    example: 45
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'user`s gender',
    example: EGender.FEMALE,
    enum: Object.keys(EGender),
    enumName: 'EGender'
  })
  @IsOptional()
  @IsEnum(EGender)
  gender: EGender;

  @IsOptional()
  @ApiProperty({
    description: 'user`s height',
    example: 178,
    minimum: 80,
    maximum: 250
  })
  @Min(80)
  @Max(250)
  @IsOptional()
  height?: number;

  @ApiProperty({
    description: 'user`s weight',
    example: 78,
    minimum: 30,
    maximum: 300
  })
  @Min(30)
  @Max(300)
  @IsOptional()
  weight?: number;

  @ApiProperty({
    description: 'user`s age',
    example: 78
  })
  @IsOptional()
  @Min(6)
  @Max(120)
  @IsNumber()
  age: number; 

  @ApiProperty({
    description: 'user`s dominant hand (left or right)',
    example: EDominantHand.Right,
    enum: EDominantHand,
    // enum: Object.keys(EDominantHand),
    enumName: 'EDominantHand'
  })
  @IsOptional()
  @IsEnum(EDominantHand)
  dominant_hand: EDominantHand;

}