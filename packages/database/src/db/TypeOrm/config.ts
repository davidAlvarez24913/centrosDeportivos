import dotenv from "dotenv";
import { DataSource } from "typeorm";
import {
  User,
  SportCenter,
  Service,
  Reservation,
  BankAccount,
} from "./Entities";
dotenv.config();

export const dataSource = new DataSource({
  type: "mysql",
  username: process.env.DATABASE_SQL_USER,
  password: process.env.DATABASE_SQL_PASS,
  port: process.env.PORT,
  host: process.env.IP_ADDRESS,
  database: "sportscenter",
  entities: [User, SportCenter, Service, BankAccount, Reservation],
  synchronize: true,
  ssl: false,
  migrations: ["src/migrations/*.ts"],
});
