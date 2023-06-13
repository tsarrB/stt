import { AbstractEntity } from 'src/common/entities/abstract.entity';
import { DomainEntity } from 'src/domains/domains.entity';
import { GTMContainerEntity } from 'src/gtm-containers/gtm-containers.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'servers' })
export class ServerEntity extends AbstractEntity {
  @Column()
  public name: string;

  @Column()
  public hostName: string;

  @Column()
  public ipAddress: string;

  @OneToMany(() => GTMContainerEntity, (gtmContainer) => gtmContainer.server)
  gtmContainers: GTMContainerEntity[];

  @OneToMany(() => DomainEntity, (domain) => domain.server)
  domains: DomainEntity[];
}
