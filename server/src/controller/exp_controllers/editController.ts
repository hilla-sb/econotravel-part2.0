import { Request, Response } from "express";
import experienciaModel from "../../model/experienciaModel";
import iExperiencia from "../../model/interfaces/iExperiencia";

const editController = async (req: Request, res: Response,) => {
    try {
        const id:any = req.params.id
        const {nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo}:iExperiencia = req.body;
        if( !nombre || !img || !descripcion|| !precio|| !duracion|| !accesibilidad|| !ubicacion|| !transporte|| !tiempo){
            res.status(400).json({message:'Por favor, completa todos los campos.'});
        }

        const resultado:iExperiencia = 
        await experienciaModel.editExperiencia({nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo});
        await experienciaModel.editExperiencia(id);
        resultado
            ? res.status(200).json({ message: `La experiencia ${resultado.id_experiencia} ha sido editada con éxito.` })
            : res.status(500).send('No se pudieron guardar los cambios.');

    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};

export default editController;