import { Router } from "express";
import reservaController from "../controller/res_controllers/reservaController";
import addResController from "../controller/res_controllers/addResController";

const reservaRouter = Router();

//obtener todas las reservas
reservaRouter.get("/reservas", reservaController.getReservas);

//obtener el detalle de una reserva
reservaRouter.get("/reservas/:id", reservaController.getUnaReserva);

//añadir reserva nueva
reservaRouter.post("/reservas/insert", addResController);

export default reservaRouter;
