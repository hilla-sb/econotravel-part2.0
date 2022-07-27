import { Request, Response } from "express";
import experienciaModel from "../../model/experienciaModel";
import iExperiencia from "../../model/interfaces/iExperiencia";

const editController = async (req: Request, res: Response) => {
  try {
    const id: any = req.params.id;
    const experiencia: iExperiencia = req.body;

    const resultado: iExperiencia = await experienciaModel.editExperiencia(
      id,
      experiencia
    );
    res
      .status(200)
      .json({
        message: `La experiencia ${resultado.id_experiencia} ha sido editada con éxito.`,
      });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export default editController;
