import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GTMContainerService } from './gtm-containers.service';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateGTMContainerDto } from './gtm-containers.dto';
import RequestWithUser from 'src/authentication/interfaces/request-with-user.interface';
import JwtAuthenticationGuard from 'src/authentication/guard/jwt-authentication.guard';

@Controller('gtm-containers')
@ApiTags('gtm-containers')
export class GTMContainerController {
  constructor(private readonly _gtmContainerService: GTMContainerService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  @ApiOkResponse({
    type: CreateGTMContainerDto,
    description: 'Successfully created gtm container',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(
    @Req() request: RequestWithUser,
    @Body()
    createGTMContainerDto: CreateGTMContainerDto,
  ) {
    const { user } = request;

    return this._gtmContainerService.createGTMContainer(
      user,
      createGTMContainerDto,
    );
  }
}
