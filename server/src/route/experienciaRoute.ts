import {Router} from 'express';
import deleteController from '../controller/exp_controllers/deleteController';
// import editController from '../controller/editController';
import experienciaController from '../controller/exp_controllers/experienciaController';
import addController from '../controller/exp_controllers/addController';

const router = Router();

//obtener todas las experiencias
router.get('/experiencias', experienciaController.getExperiencias);
//obtener el detalle de una experiencia en concreto
router.get('/experiencias/:id',experienciaController.getUnaExperiencia);
router.post('/experiencias/:id',experienciaController.addExperiencia);
//eliminar una experiencia
router.delete('/experiencias/:id', deleteController);
// router.put('/experiencias/:id', editController);

export default router;