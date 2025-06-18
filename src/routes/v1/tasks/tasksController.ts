import { Request, Response } from "express";

export const listTasks = async (req: Request, res: Response) => {
  res.status(200).json([]);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ id: id, name: `Task ${id}` });
};
