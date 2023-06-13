import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, QueryRunner, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as cookie from 'cookie';

import { PostgresErrorCode } from 'src/database/constraints/errors.constraint';
import { UserEntity } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';
import { CreateAuthenticationDto } from './dtos/authentication.dto';
import { RegistrationDto } from './dtos/registration.dto';
import { AuthenticationEntity } from './authentication.entity';
import { UserAlreadyExistException } from './exceptions/user-already-exist.exception';
import { AuthenticationProvider } from './authentication.provider';
import { WrongCredentialsException } from './exceptions/wrong-credentials.exception';
import { TokenPayload } from './interfaces/token-payload.interface';
import { ConfigService } from '@nestjs/config';

const AUTHENTICATION_COOKIE_NAME = 'Authentication';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(AuthenticationEntity)
    private authenticationRepository: Repository<AuthenticationEntity>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly _connection: Connection,
  ) {}

  async registration(registrationDto: RegistrationDto): Promise<UserEntity> {
    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const authentication = await this.createAuthentication(
        registrationDto,
        queryRunner,
      );

      const user = await this.userService.createUser(
        registrationDto,
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
      await queryRunner.release();
    }
  }

  async login(email: string, password: string): Promise<UserEntity> {
    const authentication = await this.authenticationRepository.findOne({
      where: { email },
      relations: ['user'],
    });

    await this.verifyPassword(password, authentication?.password);

    return authentication.user;
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
    return cookie.serialize(AUTHENTICATION_COOKIE_NAME, null, {
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
