import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Project } from "./entity/Project";
import { ProjectImage } from "./entity/ProjectImage";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "../database/db.sqlite",

  // Common data source options
  synchronize: true,
  logging: false,
  entities: [User, Project, ProjectImage],
  migrations: [],
  subscribers: [],
});
