import { Router } from "express";
import usuarioController from "../controller/usuarioController";
import authHandler from "../middleware/authHandler";
import { jwtHandler } from "../middleware/jwtHandler";

const router = Router();

router.post('/usuario/register', authHandler.encryptPassword, usuarioController.saveUsuario)

router.post("/usuarios/login", authHandler.validateUser, usuarioController);

router.get("/usuarios/all", jwtHandler. validateToken, usuarioController.getUsuario);

export default router;
