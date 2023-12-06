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
} from "./handlers/user";

import { ProjectImage } from "./entities/ProjectImage";

const router = Router();

// Get repositories
// const projectImageRepository = AppDataSource.getRepository(ProjectImage);

// Project routes
router.get("/projects", allProjects);
router.get("/projects/:id", findProject);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

// User routes
router.get("/users", allUsers);
router.get("/users/:id", findUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
