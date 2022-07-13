import express, {Request, Response} from 'express';
import experienciaRoute from './route/experienciaRoute';
import usuarioRoute from './route/usuarioRoute'

const app = express(); 
app.use(express.json());
app.use(experienciaRoute);
app.use(usuarioRoute);

app.get('/',(req:Request, res:Response)=>{
    res.json('hello Word');

})
const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log("running on 3000");
});