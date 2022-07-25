import experienciaModel from "../../model/experienciaModel";
import { Request, Response } from "express";

const editController = async (req: Request, res: Response,) => {
    try {
        const id = req.params.id
        const result: any = await experienciaModel.editExperiencia(id);
        res.status(200).json ({message: `La experiencia ${result.id_experiencia} ha sido editada con éxito.`})

    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};

export default editController;