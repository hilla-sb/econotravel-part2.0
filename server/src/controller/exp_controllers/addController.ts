import { Request, Response } from "express";
import experienciaModel from "../../model/experienciaModel";
import iExperiencia from "../../model/interfaces/iExperiencia";

const addController = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      img,
      descripcion,
      precio,
      duracion,
      accesibilidad,
      ubicacion,
      transporte,
      tiempo,
      ...experiencias
    }: iExperiencia = req.body;

    if (
      !nombre ||
      !img ||
      !descripcion ||
      !precio ||
      !duracion ||
      !accesibilidad ||
      !ubicacion ||
      !transporte ||
      !tiempo
    )
      res.status(400).json({ message: "Por favor, rellena todos los campos." });

    const resultado: iExperiencia = await experienciaModel.addExperiencia({
      nombre,
      img,
      descripcion,
      precio,
      duracion,
      accesibilidad,
      ubicacion,
      transporte,
      tiempo,
      ...experiencias,
    });

    res
      .status(200)
      .json({
        message: `La experiencia ${resultado.id_experiencia} ha sido añadida con éxito.`,
      });
  } catch (err: any) {
    res.status(400).json({
      error: err,
    });
  }
};

export default addController;
