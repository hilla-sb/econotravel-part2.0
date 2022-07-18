import express, {Request, Response} from 'express';
import experienciaRoute from './route/experienciaRoute';
import usuarioRoute from './route/usuarioRoute';
import loginRoute from './route/loginRoute';
import reservaRoute from './route/reservaRoute';

const app = express(); 
app.use(express.json());
app.use(experienciaRoute);
app.use(usuarioRoute);
app.use(loginRoute);
app.use(reservaRoute);

app.get('/',(req:Request, res:Response)=>{
    res.json('hello World');

})
const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log("Running on 3001");
});