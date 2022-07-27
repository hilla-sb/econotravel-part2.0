import { Request, Response } from "express";
import reservaModel from "../../model/reservaModel";
import iReserva from "../../model/interfaces/iReserva";

const editResController = async (req: Request, res: Response) => {
  try {
    const id: any = req.params.id;
    const reserva: iReserva = req.body;

    const resultado: iReserva = await reservaModel.editReserva(id, reserva);
    res
      .status(200)
      .json({
        message: `La reserva ${resultado.id_reserva} ha sido editada con éxito.`,
      });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export default editResController;
