import { AuthenticationEntity } from 'src/authentication/authentication.entity';
import { AbstractEntity } from 'src/common/entities/abstract.entity';
import { GTMContainerEntity } from 'src/gtm-containers/gtm-containers.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  Index,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column()
  public firstName: string;

  @Column({ default: true })
  public marketingEmails: boolean;

  @OneToOne(
    () => AuthenticationEntity,
    (authentication: AuthenticationEntity) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  @Index()
  public authentication: AuthenticationEntity;

  @ManyToMany(() => GTMContainerEntity)
  @JoinTable()
  public gtmContainers: GTMContainerEntity[];
}
