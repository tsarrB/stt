import * as bcrypt from 'bcrypt';

export class AuthenticationProvider {
  static async generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  static async compareHash(
    password: string,
    hash: string,
  ): Promise<boolean | undefined> {
    return bcrypt.compare(password, hash);
  }
}
