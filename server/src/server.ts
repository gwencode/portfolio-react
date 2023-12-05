import express from "express";
import fs from "fs/promises";
import "reflect-metadata";

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/projects", async (req, res) => {
  try {
    // Get json file in folder database/db.json
    const jsonData = await fs.readFile("./database/db.json", "utf-8");
    // Parse json file
    const data = JSON.parse(jsonData);
    // Extract "projects" from json file
    const projects = data.projects;
    // Send projects to client
    res.json(projects);
  } catch (error) {
    console.error("Error while getting projects from db.json", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default app;
