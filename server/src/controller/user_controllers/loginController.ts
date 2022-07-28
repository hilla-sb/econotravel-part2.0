import { Request, Response } from "express";
import { iUsuario, iUsuariologin } from "../../model/interfaces/iUsuario";
import usuarioModel from "../../model/usuarioModel";

const loginController = async (req: Request, res: Response) => {
    try {
        const {
            email,
            password,
        }: iUsuariologin = req.body;

        if (!email || !password) {
            res
                .status(400)
                .json({ message: "Porfavor, rellene todos los campos obligatorios." });
        }
        const resultado: iUsuario = await usuarioModel.loginUsuario({
            email,
            password,
        });

        res.status(200).json({
            message: `El usuario ${resultado.id_usuario} ha iniciado sesión correctamente.`,
        });
    } catch (err: any) {
        res.status(400).json({
            error: err,
        });
    }
};

export default loginController;