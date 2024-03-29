import { Request, Response } from "express";
import reservaModel from "../../model/reservaModel";

const deleteResController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result: any = await reservaModel.deleteReserva(parseInt(id));

    res.status(200).json({
      message: `Tu reserva ${result.id_reserva} ha sido borrada con éxito.`,
    });
  } catch (err: any) {
    res.status(400).json({
      error: err,
    });
  }
};

export default deleteResController;
