import { Request, Response } from "express";
import deleteExperiencia from'../model/experienciaModel';


const deleteController = async (req: Request, res: Response) => {
    try {
         const id = req.params.id
         const result = await deleteExperiencia(parseInt(id));

         res.status(200).json({ message: `Tu experiencia ${result.id_experiencia} ha sido borrada con éxito.` })

        } catch (err: any) {
         res.status(400).json({
             error: err,
         });
     };
 };


 export default deleteController;