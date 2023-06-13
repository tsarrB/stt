import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DomainService } from './domains.service';
import { CreateDomainDto } from './domains.dto';
import JwtAuthenticationGuard from 'src/authentication/guard/jwt-authentication.guard';

@Controller('domains')
@ApiTags('domains')
export class DomainController {
  constructor(private readonly domainsService: DomainService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  @ApiOkResponse({
    type: CreateDomainDto,
    description: 'Successfully created domain',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(
    @Body()
    createDomainDto: CreateDomainDto,
  ) {
    return this.domainsService.createDomain(createDomainDto);
  }
}
