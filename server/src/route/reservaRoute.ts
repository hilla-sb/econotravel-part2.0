import {Router} from 'express';
import reservaController from '../controller/reservaController';

const reservaRouter = Router();

reservaRouter.get('/reservas', reservaController.getReservas);

reservaRouter.get('/reservas/:id',reservaController.getUnaReserva);

reservaRouter.post('/reservas/insert',reservaController.addReserva);

export default reservaRouter;