import express, { Request, Response } from "express";
// import fs from "fs/promises";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Project } from "./entity/Project";
import { ProjectImage } from "./entity/ProjectImage";

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/projects", async (req: Request, res: Response) => {
  try {
    const projects = await AppDataSource.getRepository(Project).find();
    res.json(projects);
  } catch (error) {
    console.error("Error while getting projects from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await AppDataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.error("Error while getting users from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const user = await AppDataSource.getRepository(User).save(req.body);
    res.json(user);
  } catch (error) {
    console.error("Error while saving new user into database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default app;
