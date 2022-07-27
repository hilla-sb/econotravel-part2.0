import { Router } from "express";
import reservaController from "../controller/res_controllers/reservaController";
import addResController from "../controller/res_controllers/addResController";
import editResController from "../controller/res_controllers/editResController";
import deleteResController from "../controller/res_controllers/deleteResController";

const reservaRouter = Router();

//obtener todas las reservas
reservaRouter.get("/reservas", reservaController.getReservas);

//obtener el detalle de una reserva
reservaRouter.get("/reservas/:id", reservaController.getUnaReserva);

//añadir reserva nueva
reservaRouter.post("/reservas/insert", addResController);

//editar reserva
reservaRouter.put("/reservas/edit/:id", editResController);

//eliminar reserva
reservaRouter.delete("/reservas/:id", deleteResController);

export default reservaRouter;
