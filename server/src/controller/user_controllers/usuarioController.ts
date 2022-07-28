import { Response, Request } from "express";
import usuarioModel from "../../model/usuarioModel";

const usuarioController = {
  getUsuarios: async (req: Request, res: Response) => {
    const usuarios: any = await usuarioModel.getUsuarios();
    res.json(usuarios);
  },

  getUnUsuario: async (req: Request, res: Response) => {
    const param: any = req.params["id"];
    const usuarios: any = await usuarioModel.getUnUsuario(param);
    res.json(usuarios);
  },
};

export default usuarioController;
