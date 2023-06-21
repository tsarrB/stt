import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as cookie from 'cookie';
import Redis from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { ConfigService } from '@nestjs/config';

import { PostgresErrorCode } from 'src/database/constraints/errors.constraint';
import { UserEntity } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { EmailService } from 'src/email/email.service';
import { uuid } from 'src/helpers/uuid';

import { CreateAuthenticationDto } from './dtos/authentication.dto';
import { RegistrationDto } from './dtos/registration.dto';
import { AuthenticationEntity } from './authentication.entity';
import { UserAlreadyExistException } from './exceptions/user-already-exist.exception';
import { AuthenticationProvider } from './authentication.provider';
import { WrongCredentialsException } from './exceptions/wrong-credentials.exception';
import { TokenPayload } from './interfaces/token-payload.interface';
import { ConfirmationDto } from './dtos/confirmation.dto';
import { TokenNotExistException } from './exceptions/token-not-exist.exception';
import { UserNotExistException } from 'src/users/exceprions/user-not-exist.exception';

const AUTHENTICATION_COOKIE_NAME = 'Authentication';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRedis()
    private readonly redis: Redis,
    @InjectRepository(AuthenticationEntity)
    private authenticationRepository: Repository<AuthenticationEntity>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly _connection: Connection,
  ) {}

  async sendConfirmationEmail(confirmationDto: ConfirmationDto) {
    const { email } = confirmationDto;

    const authentication = await this.authenticationRepository.findOne({
      where: { email },
    });

    if (authentication) {
      // TODO: send email with reset password link ???
      return true;
    }

    const token = uuid(20);

    await this.redis.set(token, email, 'EX', 60 * 60 * 24);

    await this.emailService.sendConfirmation(email, token);

    return true;
  }

  async registration(registrationDto: RegistrationDto): Promise<UserEntity> {
    const { token, ...registrationParams } = registrationDto;

    const email = await this.getEmailByConfirmationToken(token);

    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const authentication = await this.createAuthentication(
        { email, password: registrationParams.password },
        queryRunner,
      );

      const user = await this.userService.createUser(
        registrationParams,
        authentication,
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return user;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new UserAlreadyExistException();
      }

      throw new InternalServerErrorException();
    } finally {
      await this.redis.del(token);

      await queryRunner.release();
    }
  }

  async login(email: string, password: string): Promise<UserEntity> {
    const authentication = await this.authenticationRepository.findOne({
      where: { email },
      relations: ['user'],
    });

    if (!authentication) {
      throw new UserNotExistException();
    }

    await this.verifyPassword(password, authentication.password);

    return authentication.user;
  }

  async getEmailByConfirmationToken(token: string): Promise<string> {
    const email = await this.redis.get(token);

    if (!email) {
      throw new TokenNotExistException();
    }

    return email;
  }

  public getCookieWithJwtToken(userId: number) {
    const token = this.jwtService.sign({ userId } as TokenPayload);

    return cookie.serialize(AUTHENTICATION_COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      maxAge: this.configService.get('JWT_EXPIRATION_TIME'),
    });
  }

  public getCookieForLogout() {
    return cookie.serialize(AUTHENTICATION_COOKIE_NAME, '', {
      path: '/',
      httpOnly: true,
      maxAge: 0,
    });
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    const isValidPass = await AuthenticationProvider.compareHash(
      password,
      hashedPassword,
    );

    if (!isValidPass) {
      throw new WrongCredentialsException();
    }
  }

  private async createAuthentication(
    createAuthenticationDto: CreateAuthenticationDto,
    queryRunner: QueryRunner,
  ): Promise<AuthenticationEntity> {
    const authentication = this.authenticationRepository.create(
      createAuthenticationDto,
    );

    return queryRunner.manager.save(authentication);
  }
}
