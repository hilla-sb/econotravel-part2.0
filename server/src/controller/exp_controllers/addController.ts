import { Request, Response } from "express";
import experienciaModel from'../../model/experienciaModel';


const addController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result: any = await experienciaModel.addExperiencia(parseInt(id));

        res.status(200).json({ message: `Tu experiencia ${result.id_experiencia} ha sido añadida con éxito.` })

    } catch (err: any) {
        res.status(400).json({
            error: err,
        });
    };
};


export default addController;