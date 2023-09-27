import { Entity, Column, BaseEntity, OneToMany, PrimaryColumn } from "typeorm";
import Service from "./Service";
import BankAccount from "./BankAccount";

@Entity()
class SportCenter extends BaseEntity {
  @PrimaryColumn()
  sportCenterId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  ubication: string;

  @Column()
  schedule: string;

  @Column()
  access: boolean;

  @OneToMany(() => Service, (service) => service.sportCenter, {
    onDelete: "CASCADE",
  })
  services: Service[];

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.sportCenter, {
    onDelete: "CASCADE",
  })
  bankAccounts: BankAccount[];
}
export default SportCenter;
