import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User, SportCenter, Service, Reservation } from "./Entities";
dotenv.config();

export const dataSource = new DataSource({
  type: "mysql",
  username: process.env.DATABASE_SQL_USER,
  password: process.env.DATABASE_SQL_PASS,
  port: 3306,
  host: "localhost",
  database: "sportscenter",
  entities: [User, SportCenter, Service, Reservation],
  synchronize: true,
  ssl: false,
  migrations: ["src/migrations/*.ts"],
});
