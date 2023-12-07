import { Router } from "express";
import {
  allProjects,
  findProject,
  createProject,
  updateProject,
  deleteProject,
} from "./handlers/project";
import {
  allUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
  signIn,
} from "./handlers/user";

import { ProjectImage } from "./entities/ProjectImage";

export const protectRouter = Router();
export const notProtectRouter = Router();

// Get repositories
// const projectImageRepository = AppDataSource.getRepository(ProjectImage);

// Project routes
notProtectRouter.get("/projects", allProjects);
notProtectRouter.get("/projects/:id", findProject);
protectRouter.post("/projects", createProject);
protectRouter.put("/projects/:id", updateProject);
protectRouter.delete("/projects/:id", deleteProject);

// User routes
protectRouter.get("/users", allUsers);
protectRouter.get("/users/:id", findUser);
protectRouter.post("/users", createUser);
protectRouter.put("/users/:id", updateUser);
protectRouter.delete("/users/:id", deleteUser);
notProtectRouter.post("/users/signin", signIn);
