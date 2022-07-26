import { Request, Response } from "express";
import { stringify } from "querystring";
import experienciaModel from "../../model/experienciaModel";
import iExperiencia from "../../model/interfaces/iExperiencia";

const editController = async (req: Request, res: Response,) => {
    try {
        const id:any = req.params.id
        const experiencia:iExperiencia = req.body

        const resultado:iExperiencia = 
        await experienciaModel.editExperiencia(id,experiencia);
            res.status(200).json({ message: `La experiencia ${resultado.id_experiencia} ha sido editada con éxito.` })

        console.log('resultado obtenido addcontroller')
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};

export default editController;

// if( !nombre || !img || !descripcion|| !precio|| !duracion|| !accesibilidad|| !ubicacion|| !transporte|| !tiempo){
//     res.status(400).json({message:'Por favor, completa todos los campos.'});
// }
// : res.status(500).send('No se pudieron guardar los cambios.');