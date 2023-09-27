import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Service from "./Service";
import User from "./User";

@Entity()
class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  reservationId: number;

  @Column()
  state: boolean;

  @Column()
  date: string;

  @Column()
  paymentId: string;

  @Column({ type: "double", nullable: false })
  reservationPrice: number;

  @ManyToOne(() => User, (user) => user.reservations, { nullable: false })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Service, (service) => service.reservations, {
    nullable: false,
  })
  @JoinColumn({ name: "serviceId" })
  service: Service;
}
export default Reservation;
