import { Entity, Column, BaseEntity, OneToMany, PrimaryColumn } from "typeorm";
import Reservation from "./Reservation";

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  userId: string;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column("date")
  birthDate: Date;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];
}
export default User;
