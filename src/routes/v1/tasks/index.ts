import express, { Router } from "express";
import { listTasks, getTask, createTask, updateTask } from "./tasksController";
import authenticateUser from "../../../middlewares/authenticate-user";
import validateRequest from "../../../middlewares/validate-request";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../../../data/request-schemas";

const tasks: Router = express.Router();

tasks.use(authenticateUser); // Apply authentication middleware to all task routes
tasks.get("/", listTasks);
tasks.get("/:id", getTask);
tasks.post("/", validateRequest(createTaskSchema), createTask);
tasks.put("/:id", validateRequest(updateTaskSchema), updateTask);

export default tasks;
