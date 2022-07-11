import { Response, Request } from "express";
import experienciaModel from "../Model/experienciaModel";

const experienciaController = {
  getExperiencias: async (req: Request, res: Response) => {
    const experiencias: any = await experienciaModel.getExperiencias();
    res.json(experiencias);
  },


 getUnaExperiencia: async (req: Request, res: Response) => {
  const parametro = req.parametros["id"];
  const experiencias: any = await experienciaModel.getUnaExperiencia(parametro);
  res.json(experiencias);
}}

export default experienciaController;
