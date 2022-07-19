import { Response, Request } from "express";
import experienciaModel from "../model/experienciaModel";

const experienciaController  = {

  getExperiencias: async (req: Request, res: Response) => {
    const experiencias:any = await experienciaModel.getExperiencias();
    res.json(experiencias);
  },

  getUnaExperiencia: async (req: Request, res: Response) => {
    const param: any = req.params["id_experiencia"];
    console.log('empezando')
    const experiencias: any = await experienciaModel.getUnaExperiencia(param);
    console.log('conectado')
    res.json(experiencias);
  },
};

export default experienciaController;
