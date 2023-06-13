import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
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
  readonly config: string;

  @IsBoolean()
  @ApiProperty()
  readonly renewal: boolean;

  @IsNumber()
  @ApiProperty()
  readonly serverId: number;
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

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly serverId: number;
}
