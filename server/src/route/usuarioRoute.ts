import {Router} from 'express';
import usuarioController from '../controller/usuarioController';

const router = Router();

router.get('/usuarios', usuarioController);

export default router;