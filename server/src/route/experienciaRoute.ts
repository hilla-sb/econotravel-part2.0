import {Router} from 'express';
import deleteController from '../controller/deleteController';
// import editController from '../controller/editController';
import experienciaController from '../controller/experienciaController';

const router = Router();

router.get('/experiencias', experienciaController.getExperiencias);
router.get('/experiencias/:id',experienciaController.getUnaExperiencia);
router.delete('/experiencias/:id', deleteController);
// router.put('/experiencias/:id', editController);

export default router;