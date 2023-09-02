import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import Service from "./Service";

@Entity()
class SportCenter extends BaseEntity {
  @PrimaryGeneratedColumn()
  sportCenterId: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  ubication: string;

  @Column()
  hoursOperarion: string;

  @OneToMany(() => Service, (service) => service.sportCenter, {
    onDelete: "CASCADE",
  })
  services: Service[];
}
export default SportCenter;
