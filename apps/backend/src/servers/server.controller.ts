import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServerService } from './server.service';
import { CreateServerDto } from './server.dto';

@Controller('servers')
@ApiTags('servers')
export class ServerController {
  constructor(private readonly _serverService: ServerService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return this._serverService.findAll();
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: CreateServerDto,
    description: 'Successfully created server',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(
    @Body()
    createServerDto: CreateServerDto,
  ) {
    return this._serverService.createServer(createServerDto);
  }
}
