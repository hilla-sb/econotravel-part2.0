import { Request, Response } from "express";
import reservaModel from "../../model/reservaModel";
import iReserva from "../../model/interfaces/iReserva";

const addResController = async (req: Request, res: Response) => {
    try {
        const id: any = req.body
        const result: iReserva = await reservaModel.addReserva(id);

        res.status(200).json({ message: `La reserva ${result.id_reserva} ha sido añadida con éxito.` })
    } catch (err: any) {
        res.status(400).json({
            error: err,
        })
    }
};

export default addResController;