import { Exclude } from 'class-transformer';
import { AbstractEntity } from 'src/common/entities/abstract.entity';
import { DomainEntity } from 'src/domains/domains.entity';
import { uuid } from 'src/helpers/uuid';
import { ServerEntity } from 'src/servers/server.entity';
import { UserEntity } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'gtm-containers' })
export class GTMContainerEntity extends AbstractEntity {
  @Column()
  public name: string;

  @Column({ unique: true })
  public config: string; // GTM Container Config

  @Column()
  public identifier: string = uuid(8);

  @Column({ default: null })
  public containerHash: string;

  @Column({ default: true })
  public renewal: boolean; // Auto-renewal

  // Tariff plan

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  public owner: UserEntity;

  @ManyToOne(() => ServerEntity, (server) => server.gtmContainers)
  public server: ServerEntity;

  @OneToMany(() => DomainEntity, (domain) => domain.gtmContainer)
  @JoinColumn()
  public domains: DomainEntity[];

  @Column({ default: false })
  @Exclude()
  public deleted: boolean;
}
