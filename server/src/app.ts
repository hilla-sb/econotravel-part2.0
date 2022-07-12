import express, {Request, Response} from 'express';
import experienciaRoute from './route/experienciaRoute';

const app = express(); 
app.use(express.json());
app.use(experienciaRoute);

app.get('/',(req:Request, res:Response)=>{
    res.json('hello Word');

})
const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log("running on 3000");
});