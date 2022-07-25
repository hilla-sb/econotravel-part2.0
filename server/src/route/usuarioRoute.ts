import { Router } from 'express';
import usuarioController from '../controller/usuarioController';
import authHandler from '../middleware/authHandler';
import { validateToken } from '../middleware/jwtHandler';


const router = Router();
// router.post('/usuario/login', authHandler.validateUser, usuarioController)
router.post('/usuarios', authHandler.encryptPassword, usuarioController)
router.get('/usuarios', validateToken, usuarioController);

export default router;