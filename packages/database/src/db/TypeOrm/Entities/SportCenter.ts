import {
  Entity,
  Column,
  BaseEntity,
  OneToMany,
  PrimaryColumn,
  Index,
} from "typeorm";
import Service from "./Service";
import BankAccount from "./BankAccount";

@Entity()
class SportCenter extends BaseEntity {
  @PrimaryColumn()
  sportCenterId: string;

  @Index({ unique: true })
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
