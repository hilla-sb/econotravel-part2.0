import { Response, Request } from "express";
import experienciaModel from "../model/experienciaModel";

const experienciaController = {

  getExperiencias: async (req: Request, res: Response) => {
    const experiencias:any = await experienciaModel.getExperiencias();
    res.json(experiencias);
  },

  getUnaExperiencia: async (req: Request, res: Response) => {
    const param: any = req.params["id"];
    const experiencias: any = await experienciaModel.getUnaExperiencia(param);
    res.json(experiencias);
  },
};

export default experienciaController;
