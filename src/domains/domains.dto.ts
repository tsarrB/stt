import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDomainDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly hostName: string;

  @IsBoolean()
  @ApiProperty()
  readonly isPersonal: boolean;

  @IsNumber()
  @ApiProperty()
  readonly serverId: number;

  @IsNumber()
  @ApiProperty()
  readonly gtmContainerId: number;
}
