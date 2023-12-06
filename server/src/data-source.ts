import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "../database/db.sqlite",

  // Common data source options
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
