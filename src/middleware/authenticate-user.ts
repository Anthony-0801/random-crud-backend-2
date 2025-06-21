import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError";
import config from "../config";

const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthenticationError({
      message: "Authentication token is missing or invalid.",
      statusCode: 401,
      code: "ERROR_AUTHENTICATION_FAILED",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.appSecret);
    req.auth = { payload: decoded as JwtPayload, token }; // Assuming you attach the auth info to the request object

    next();
  } catch (error) {
    throw new AuthenticationError({
      message: "You are not authorized to access this resource.",
      statusCode: 403,
      code: "ERROR_AUTHENTICATION_FAILED",
    });
  }
};

export default authenticateUser;
