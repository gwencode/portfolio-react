import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Project } from "../entities/Project";

const projectRepository = AppDataSource.getRepository(Project);

// Get all
export const allProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectRepository.find();
    res.json(projects);
  } catch (error) {
    console.error("Error while getting projects from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get one
export const findProject = async (req: Request, res: Response) => {
  try {
    const project = await projectRepository.findOneBy({
      id: Number(req.params.id),
    });
    res.json(project);
  } catch (error) {
    console.error("Error while getting project from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create one
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await projectRepository.save(req.body);
    res.json(project);
  } catch (error) {
    console.error("Error while saving new project into database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update
export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await projectRepository.findOneBy({
      id: Number(req.params.id),
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } else {
      project.title = req.body.title || project.title;
      project.content = req.body.content || project.content;
      project.category = req.body.category || project.category;
      project.stack = req.body.stack || project.stack;
      project.liveSite = req.body.liveSite || project.liveSite;
      project.github = req.body.github || project.github;
      project.date = req.body.date || project.date;
      project.order = req.body.order || project.order;
      await projectRepository.save(project);
      res.json(project);
    }
  } catch (error) {
    console.error("Error while updating project in database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await projectRepository.findOneBy({
      id: Number(req.params.id),
    });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    } else {
      await projectRepository.remove(project);
      res.json({ message: "Project deleted" });
    }
  } catch (error) {
    console.error("Error while deleting project from database", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
