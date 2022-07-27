import bcryptjs from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { iUsuario, iUsuariologin } from "../model/interfaces/iUsuario";
import usuarioModel from "../model/usuarioModel";

const hashPassword = (password: string) => {
  const saltRounds = 10;
  return bcryptjs.hash(password, saltRounds);
};

//Encriptamos la contraseña.
const encryptPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.password === undefined) {
      res.send("password missing");
    } else {
      const saltRounds = 10;
      const passwordHash = await bcryptjs.hash(req.body.password, saltRounds);
      req.body.password = passwordHash;
      next();
    }
  } catch (error) {
    res.status(500).send("internal error");
  }
};

//Validamos el usuario
const validateUser = async (
  res: Response,
  req: Request,
  next: NextFunction
) => {
  try {
    const { email, password }: iUsuariologin = req.body;

    if (!email || !password) {
      throw new Error("email or password does not exist");
    }
    const resultado: any = await usuarioModel.getUnUsuario({ email, password });
    const comparePassword = await bcryptjs.compare(
      req.body.password,
      resultado.password
    );
    if (comparePassword) {
      next();
    } else {
      throw new Error("password not valid");
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export default { encryptPassword, validateUser, hashPassword };
