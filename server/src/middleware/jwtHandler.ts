import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../services/config";

const getTokenFrom = (request: Request) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  } else {
    return null;
  }
};

const tokenVerify = (token: any) => jwt.verify(token, config().secret);

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getTokenFrom(req);
    console.log(token);

    const email: any = tokenVerify(token);

    if (!token || !email) {
      throw new Error("token invalid or missing");
    } else {
      next();
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
