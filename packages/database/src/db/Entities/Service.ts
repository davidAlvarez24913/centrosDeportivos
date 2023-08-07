import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import SportCenter from "./SportCenter";
import Reservation from "./Reservation";

@Entity()
class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  serviceId: number;

  @Column()
  name: string;

  @Column()
  sport: string;

  @Column({ type: "double" })
  price: number;

  @Column()
  description: string;
  // buscar forma de renombrar
  @ManyToOne(() => SportCenter, (sportCenter) => sportCenter.services, {
    nullable: false,
  })
  @JoinColumn({ name: "sportCenterId" })
  sportCenter: SportCenter;

  @OneToMany(() => Reservation, (reservation) => reservation.service)
  reservations: Reservation[];
}

export default Service;
