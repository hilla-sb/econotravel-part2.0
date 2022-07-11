import {Router} from 'express';
import experienciaController from '../Controller/experienciaController';

const router = Router();

router.get('/experiencias', experienciaController.getExperiencias);
router.get('/experiencias/id',experienciaController.getUnaExperiencia);

export default router;