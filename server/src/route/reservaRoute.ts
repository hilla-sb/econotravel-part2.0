import {Router} from 'express';
import reservaController from '../controller/reservaController';

const reservaRouter = Router();

reservaRouter.get('/reservas', reservaController.getReservas);

reservaRouter.get('/reservas/:id',reservaController.getUnaReserva);

export default reservaRouter;