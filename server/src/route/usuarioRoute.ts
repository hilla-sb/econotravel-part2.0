import { Router } from "express";
import authHandler from "../middleware/authHandler";
import jwtHandler from "../middleware/jwtHandler";
import usuarioController from "../controller/usuarioController";

const router = Router();

router.get("/usuarios/", jwtHandler.validateToken, usuarioController);

router.get("/usuarios/:id", usuarioController);

router.post(
  "/usuario/register",
  authHandler.encryptPassword,
  usuarioController
);

router.post("/usuarios/login", usuarioController);

router.put("usuarios/:id", usuarioController);

export default router;
