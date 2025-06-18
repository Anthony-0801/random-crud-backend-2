import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntityNotFoundError";

export const listTasks = async (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  throw new EntityNotFoundError(
    "Task not found",
    404,
    "ERROR_ENTITY_NOT_FOUND",
  );
  const { id } = req.params;
  res.status(200).json({ id: id, name: `Task ${id}` });
};
