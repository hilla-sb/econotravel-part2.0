import { Request, Response } from "express";
import { iUsuario } from "../model/interfaces/iUsuario";
import usuarioModel from "../model/usuarioModel";

const usuarioController = async (req: Request, res: Response) => {
  const { email, password }: iUsuario = req.body;
  if (!email) {
    res
      .status(400)
      .json({ message: "Porfavor, rellene todos los campos obligatorios." });
  }
  // const result = await usuarioModel.saveUsuario({ email, password});

  // res.json(result);
};

export default usuarioController;
