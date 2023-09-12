import { Request, Response, NextFunction } from "express";
import { err_const } from "../constant/err_const.js";

const errMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  switch (statusCode) {
    case err_const.VALIDATION_ERROR:
      res.status(400).json({
        title: "Validation Error",
        message: err.message,
        stack: err.stack,
      });
      break;
    case err_const.UNAUTHORIZED:
      res.status(401).json({
        title: "Unauthorized",
        message: err.message,
        stack: err.stack,
      });
      break;
    case err_const.FORBIDDEN:
      res.status(403).json({
        title: "Forbidden",
        message: err.message,
        stack: err.stack,
      });
      break;
    case err_const.NOT_FOUND:
      res.status(404).json({
        title: "Not Found",
        message: err.message,
        stack: err.stack,
      });
      break;
    default:
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
      break;
  }
};

export { errMiddleware };
