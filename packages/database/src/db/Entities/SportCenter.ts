import { Entity, Column, BaseEntity, OneToMany, PrimaryColumn } from "typeorm";
import Service from "./Service";

@Entity()
class SportCenter extends BaseEntity {
  @PrimaryColumn()
  sportCenterId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  ubication: string;

  @Column()
  hoursOperation: string;

  @Column()
  access: boolean;

  @OneToMany(() => Service, (service) => service.sportCenter, {
    onDelete: "CASCADE",
  })
  services: Service[];
}
export default SportCenter;
