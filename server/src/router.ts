import { Router, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Project } from "./entity/Project";
import { ProjectImage } from "./entity/ProjectImage";

const router = Router();

// Get repositories
const userRepository = AppDataSource.getRepository(User);
const projectRepository = AppDataSource.getRepository(Project);
const projectImageRepository = AppDataSource.getRepository(ProjectImage);

// register routes

router.get("/projects", async (req: Request, res: Response) => {
  try {
    const projects = await projectRepository.find();
    res.json(projects);
  } catch (error) {
    console.error("Error while getting projects from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    console.error("Error while getting users from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/users", async (req: Request, res: Response) => {
  try {
    const user = await userRepository.save(req.body);
    res.json(user);
  } catch (error) {
    console.error("Error while saving new user into database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
