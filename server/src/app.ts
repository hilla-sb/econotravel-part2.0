import express, { Request, Response } from "express";
import route from "./route/experienciaRoute";
import usuarioRoute from "./route/usuarioRoute";
import reservaRoute from "./route/reservaRoute";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);
app.use(usuarioRoute);
app.use(reservaRoute);

app.get("/", (req: Request, res: Response) => {
  res.json("Hey there! We're Econotravel.");
});

export default app;
