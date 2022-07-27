import { Response, Request } from "express";
import reservaModel from "../../model/reservaModel";

const reservaController = {
  getReservas: async (req: Request, res: Response) => {
    const reservas: any = await reservaModel.getReservas();
    res.json(reservas);
  },

  getUnaReserva: async (req: Request, res: Response) => {
    const param: any = req.params["id"];
    console.log(param);
    const reservas: any = await reservaModel.getUnaReserva(param);
    console.log("conectado");
    res.json(reservas);
  },
};

export default reservaController;
