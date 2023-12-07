import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Project } from "./entities/Project";
import { ProjectImage } from "./entities/ProjectImage";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database/db.sqlite",

  // Common data source options
  synchronize: true,
  logging: false,
  entities: [User, Project, ProjectImage],
  migrations: [],
  subscribers: [],
});
