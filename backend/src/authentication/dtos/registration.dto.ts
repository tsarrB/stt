import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  MinLength,
} from 'class-validator';

export class RegistrationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly marketingEmails: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly token: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  readonly repeatPassword: string;
}
