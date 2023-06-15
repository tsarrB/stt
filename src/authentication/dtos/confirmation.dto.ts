import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ConfirmationDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;
}
