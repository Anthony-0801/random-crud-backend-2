import express, { Router } from "express";
import { listTasks, getTask } from "./tasksController";
import authenticateUser from "../../../middleware/authenticate-user";

const tasks: Router = express.Router();

tasks.use(authenticateUser); // Apply authentication middleware to all task routes
tasks.get("/", listTasks);
tasks.get("/:id", getTask);

export default tasks;
