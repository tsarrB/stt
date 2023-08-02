import { Exclude } from 'class-transformer';
import { AbstractEntity } from 'src/common/entities/abstract.entity';
import { GTMContainerEntity } from 'src/gtm-containers/gtm-containers.entity';
import { ServerEntity } from 'src/servers/server.entity';
import { Column, ManyToOne, JoinColumn, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'domains' })
export class DomainEntity extends AbstractEntity {
  @Column()
  public hostName: string;

  @Column({ default: false })
  public isPersonal: boolean;

  @Column({ default: 'pending' })
  public status: string; // pending, successes, error

  @OneToMany(() => ServerEntity, (server) => server.domains)
  @JoinColumn()
  public server: ServerEntity;

  @ManyToOne(() => GTMContainerEntity, (gtmContainer) => gtmContainer.domains)
  @Exclude()
  public gtmContainer: GTMContainerEntity;

  @Column({ default: false })
  @Exclude()
  public deleted: boolean;
}
