import {Router} from 'express';
import usuarioController from '../controller/usuarioController';
import authHandler from '../middleware.ts/authHandler';
import { validateToken } from '../middleware.ts/jwtHandler';
import {saveUsuario} from '../model/usuarioModel';




const router = Router();
router.post('/usuario/login', authHandler.validateUser , usuarioController.login)
router.post('/usuarios',authHandler.encryptPassword,usuarioController.saveUsuario)
router.get('/usuarios',validateToken,usuarioController);

export default router;