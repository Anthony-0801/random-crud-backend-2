import { NextFunction, Request, Response } from "express";
import config from "../config";
import { getErrorMessage } from "../utils";
import CustomError from "../errors/CustomError";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";
import Joi from "joi";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || config.debug) {
    next(error);
    return;
  }

  if (Joi.isError(error)) {
    const validationError: ValidationError = {
      error: {
        message: "Validation failed",
        code: "ERROR_VALIDATION_FAILED",
        errors: error.details.map((detail) => ({
          message: detail.message,
        })),
      },
    };
    res.status(422).json(validationError);
    return;
  }

  if (error instanceof CustomError) {
    res.status(error.statusCode || 500).json({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (error instanceof UnauthorizedError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: "code" in error ? error.code : "ERROR_AUTHENTICATION_FAILED",
      },
    });
    return;
  }

  res.status(500).json({
    error: {
      message: getErrorMessage(error),
      stack: config.debug ? (error as Error).stack : undefined,
    },
  });
}
