import { Router } from "express";
import authHandler from "../middleware/authHandler";
import jwtHandler from "../middleware/jwtHandler";
import loginController from "../controller/user_controllers/loginController";
import addUserController from "../controller/user_controllers/addUserController";
import usuarioController from "../controller/user_controllers/usuarioController";

const router = Router();

router.get("/usuarios/", usuarioController.getUsuarios);

router.get("/usuarios/:id", usuarioController.getUnUsuario);

router.post(
  "/usuarios/register",
  addUserController
);

router.post("/usuarios/login", loginController);

router.put("usuarios/:id",);

export default router;
