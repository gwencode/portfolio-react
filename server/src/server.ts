import express from "express";
import router from "./router";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

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

// api routes
app.use("/api", router);

export default app;
