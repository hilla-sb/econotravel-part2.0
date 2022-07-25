import {Router} from 'express';
import reservaController from '../controller/res_controllers/reservaController';
import addResController from '../controller/res_controllers/addResController';

const reservaRouter = Router();

reservaRouter.get('/reservas', reservaController.getReservas);

reservaRouter.get('/reservas/:id',reservaController.getUnaReserva);

reservaRouter.post('/reservas/insert',addResController);

export default reservaRouter;