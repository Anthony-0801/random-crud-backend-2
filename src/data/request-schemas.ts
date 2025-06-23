import Joi from "joi";

const task = {
  project_id: Joi.string().allow(null).optional().empty(null).messages({
    "string.base": `"project_id" must be a string`,
  }),
  name: Joi.string().min(1).max(255).required().messages({
    "string.base": `"name" must be a string`,
    "string.empty": `"name" cannot be an empty string`,
    "string.min": `"name" must be at least 1 characters long`,
    "string.max": `"name" must be at most 255 characters long`,
    "any.required": `"name" is a required field`,
  }),
  description: Joi.string()
    .allow(null)
    .optional()
    .max(1000)
    .empty("")
    .messages({
      "string.base": `"description" must be a string`,
      "string.max": `"description" must be at most 1000 characters long`,
    }),
  dueDate: Joi.date()
    .iso()
    .greater("now")
    .allow(null)
    .optional()
    .empty(null)
    .messages({
      "date.base": `"dueDate" must be a valid date`,
      "date.format": `"dueDate" must be in ISO 8601 format`,
      "date.greater": `"dueDate" must be a date in the future`,
    }),
  completedOn: Joi.date()
    .iso()
    .max("now")
    .allow(null)
    .optional()
    .empty(null)
    .messages({
      "date.base": `"completedOn" must be a valid date`,
      "date.format": `"completedOn" must be in ISO 8601 format`,
      "date.max": `"completedOn" must be a date in the past or present`,
    }),
};

export const createTaskSchema = Joi.object(task);

export const updateTaskSchema = Joi.object({
  ...task,
  name: Joi.string().min(1).max(255).optional().messages({
    "string.base": "Task name must be a string.",
    "string.empty": "Task name cannot be empty.",
    "string.min": "Task name must be at least 1 character long.",
    "string.max": "Task name must not exceed 255 characters.",
  }),
}).or("project_id", "name", "description", "dueDate", "completedOn");
