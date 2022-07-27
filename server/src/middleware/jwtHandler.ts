import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { config, secret } from "../services/config";


const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};

const getTokenFrom = (request: Request) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  } else {
    return null;
  }
};

const tokenVerify = (token: any) => jwt.verify(token, config().secret);

export const validateTokenRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token:string | null = getTokenFrom(req);
    console.log(token);

    let email: any = tokenVerify(token);

    if (!token || !email) {
      throw new Error("token invalid or missing");
    } else {
      next();
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

const validateTokenLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
      const token: string | null = getTokenFrom(req);
      let email: any = tokenVerify(token);
      if (!token || !email) {
          throw new Error ('token invalid or missing!');
      }
       else {
          next()
      }
  } catch (error:any) {
      res.status(400).send(error.message)
  }
}

export default {
  generateToken, validateTokenRole, validateTokenLogin
}