import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  Index,
} from "typeorm";

import SportCenter from "./SportCenter";

@Entity()
class BankAccount extends BaseEntity {
  @PrimaryGeneratedColumn()
  bankAccountId: number;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column()
  accountType: string;

  @Index({ unique: true })
  @Column()
  accountNumber: string;

  @Column()
  email: string;

  @ManyToOne(() => SportCenter, (sportCenter) => sportCenter.bankAccounts, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "sportCenterId" })
  sportCenter: SportCenter;
}

export default BankAccount;
