import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../../errors/EntityNotFoundError";
import prisma from "../../../prisma-client";

export const listTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.status(200).json({ tasks });
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const task = await prisma.task.findUnique({
    where: { id: req.params.id },
  });
  const id = req.params.id;
  if (!task) {
    throw new EntityNotFoundError({
      message: `Task with id ${id} not found`,
      statusCode: 404,
      code: "ERROR_ENTITY_NOT_FOUND",
    });
  }
  res.status(200).json({ task });
};
