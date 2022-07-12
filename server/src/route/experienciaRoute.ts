import {Router} from 'express';
import experienciaController from '../Controller/experienciaController';

const experienciaRouter = Router();

experienciaRouter.get('/experiencias', experienciaController.getExperiencias);
experienciaRouter.get('/experiencias/id',experienciaController.getUnaExperiencia);

export default experienciaRouter;