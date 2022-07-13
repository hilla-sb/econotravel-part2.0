import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import usuarioModel from '../model/usuarioModel';


//Encriptamos la contraseña.
const encryptPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.body.password === undefined) {
            res.send('password missing');
        } else {
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
            req.body.password = passwordHash;
            next();
        }
    } catch (error) {
        res.status(500).send('internal error');
    };
}

//Validamos el usuario
const validateUser = async (res, req, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('email or password not exist');
        }
        const result = await usuarioModel.getUsuario({ email, password });
        const comparePassword = await bcrypt.compare(password, result.password);
        if (comparePassword) {
            next();
        } else {
            throw new Error('password not valid');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default {encryptPassword, validateUser};