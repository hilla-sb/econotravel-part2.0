import { Router } from "express";
import authHandler from "../middleware/authHandler";
import jwtHandler from "../middleware/jwtHandler";
import usuarioController from "../controller/usuarioController";

const router = Router();

router.get("/usuarios/", usuarioController);

// router.post('/usuario/register', authHandler.encryptPassword, usuarioController.saveUsuario)

// router.post("/usuarios/login", authHandler.validateUser, usuarioController);


export default router;
