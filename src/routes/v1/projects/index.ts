import express, { Router } from "express";
import {
  listProjects,
  getProject,
  listProjectTasks,
} from "./projectsController";
import authenticateUser from "../../../middleware/authenticate-user";

const projects: Router = express.Router();

projects.use(authenticateUser); // Apply authentication middleware to all project routes
projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTasks);

export default projects;
