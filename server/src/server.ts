import express from "express";
import cors from "cors";
import { protectRouter, notProtectRouter } from "./router";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { protect } from "./middlewares/auth";
import { ProjectImage } from "./entities/ProjectImage";

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
app.use(cors());
app.use(express.json());

// api routes
app.use("/api", notProtectRouter);
app.use("/api", protect, protectRouter);

export default app;
