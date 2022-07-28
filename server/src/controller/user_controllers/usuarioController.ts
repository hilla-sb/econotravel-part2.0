import { Request, Response } from "express";
import { iUsuario } from "../../model/interfaces/iUsuario";
import usuarioModel from "../../model/usuarioModel";

const usuarioController = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      nombre,
      apellido,
      fecha_nacimiento,
      direccion,
      cp,
      telefono,
      reserva_id,
      ...usuarios
    }: iUsuario = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ message: "Porfavor, rellene todos los campos obligatorios." });
    }
    const resultado: iUsuario = await usuarioModel.addUsuario({
      email,
      password,
      nombre,
      apellido,
      fecha_nacimiento,
      direccion,
      cp,
      telefono,
      reserva_id,
      ...usuarios,
    });

    res.status(200).json({
      message: `El usuario ${resultado.id_usuario} ha sido añadido con éxito.`,
    });
  } catch (err: any) {
    res.status(400).json({
      error: err,
    });
  }
};

export default usuarioController;
