import express, { Request, Response } from "express";
import cors from "cors";
import config from "./config";
import v1 from "./routes/v1";
import errorHandler from "./middlewares/error-handler";
import morganMiddleware from "./middlewares/morgan-middleware";

export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morganMiddleware)
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/health", (req: Request, res: Response) => {
    res.json({
      ok: true,
      message: `Server is healthy running in ${config.env} mode`,
    });
  });

  app.use("/v1", v1);

  app.use(errorHandler);

  return app;
};
