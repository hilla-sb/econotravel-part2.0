import { Request, Response } from "express";
import reservaModel from "../../model/reservaModel";
import iReserva from "../../model/interfaces/iReserva";

const addResController = async (req: Request, res: Response) => {
    try {
        const {nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id, ...reservas}:iReserva = req.body

        if (!nombre|| !apellidos|| !direccion|| !fecha_inicio|| !fecha_fin|| !cantidad|| !experiencia_id)
        res.status(400).json({message:'Por favor rellena todos los campos'});

        console.log('addResController - id OK')

        const resultado: iReserva = await reservaModel.addReserva({nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id, ...reservas});

        console.log('addResController - result OK')

        res.status(200).json({ message: `La reserva ${resultado.id_reserva} ha sido añadida con éxito.` })
        console.log("añadida nueva reserva")
    } catch (err: any) {
        res.status(400).json({
            error: err,
        })
    }
};

export default addResController;