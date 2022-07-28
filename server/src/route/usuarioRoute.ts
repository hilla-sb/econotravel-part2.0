import { Router } from "express";
import authHandler from "../middleware/authHandler";
import jwtHandler from "../middleware/jwtHandler";
import usuarioController from "../controller/user_controllers/usuarioController";
import loginController from "../controller/user_controllers/loginController";

const router = Router();

router.get("/usuarios/", );

router.get("/usuarios/:id", );

router.post(
  "/usuarios/register",
  usuarioController
);

router.post("/usuarios/login", loginController);

router.put("usuarios/:id", );

export default router;
