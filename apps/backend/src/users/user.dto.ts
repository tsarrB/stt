import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateAuthenticationDto } from 'src/authentication/dtos/authentication.dto';

export class CreateUserDto extends CreateAuthenticationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  readonly marketingEmails: boolean;
}
