import { Router } from "express";
import authHandler from "../middleware/authHandler";
import jwtHandler from "../middleware/jwtHandler";
import usuarioController from "../controller/usuarioController";
import loginController from "../controller/loginController";

const router = Router();

router.get("/usuarios/", usuarioController);

router.post('/usuario/register', )

router.post("/usuarios/login", loginController);


export default router;
