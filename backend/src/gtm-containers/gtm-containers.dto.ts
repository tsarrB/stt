import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGTMContainerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(64)
  readonly config: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly renewal: boolean;

  @IsString()
  @ApiProperty()
  readonly serverId: string;
}

export class UpdateGTMContainerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  readonly config: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  readonly containerHash: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly renewal: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly serverId: string;
}
