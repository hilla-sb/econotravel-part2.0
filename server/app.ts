import express, {Request, Response} from 'express';
import experienciaRoute from '../server/src/Route/experienciaRoute';

const app = express(); 
app.use(express.json());
app.use(experienciaRoute);

app.get('/',(req:Request, res:Response)=>{
    res.json('hello Word');
})

export default app;