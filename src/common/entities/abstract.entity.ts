import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  // Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { uuid } from 'src/helpers/uuid';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  public id: number;

  @Column()
  // @Generated('uuid')
  public uuid: string = uuid();

  @CreateDateColumn()
  @Exclude()
  public createdAt: Date;

  @UpdateDateColumn()
  @Exclude()
  public updatedAt: Date;
}
