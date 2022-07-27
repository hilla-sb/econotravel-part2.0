import { connection } from "../services/database.service";
import { Client } from "pg";
import iReserva from "./interfaces/iReserva";

class Reserva {
    client: Client;
    constructor(client:any) {
      this.client = client
    }
    async getReservas(){
        const queryStr= 'SELECT * FROM reserva'
        await this.client.connect()
        const resultado = await this.client.query(queryStr);
        await this.client.end()
        return resultado.rows [0];
    }
    async getUnaReserva(id_reserva:number){
        const queryStr='SELECT * FROM reserva WHERE id_reserva=$1'
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[id_reserva]);
        await this.client.end()
        return resultado.rows [0];
    }
    //añadir
    async addReserva(id_reserva: iReserva){
        try {const queryStr =
            'INSERT INTO reserva(nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *';
            console.log('intentando conectar', id_reserva)
            await this.client.connect();
            console.log('conectado')
            console.log('esperando la query')
            const resultado: any = await this.client.query(queryStr,[
                 id_reserva.nombre,
                 id_reserva.apellidos,
                 id_reserva.direccion ,
                 id_reserva.fecha_inicio, 
                 id_reserva.fecha_fin, 
                 id_reserva.cantidad,
                id_reserva.precio_total,
                 id_reserva.experiencia_id
                ] );
            console.log('query ok')
            //await this.client.end();
            console.log('conexion cerrada')
            return resultado.rows[0];
            
        } catch (error) { console.log (error)
            
        }
        
    }
    //editar
     async editReserva(id_reserva:any, body:iReserva){
      const {
        nombre, 
        apellidos,
        direccion,
        fecha_inicio,
        fecha_fin,
        cantidad,
        precio_total,
        experiencia_id
      }: iReserva = body;

      const queryStr='UPDATE reserva SET (nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id)=($1, $2, $3, $4, $5, $6, $7, $8) WHERE  id_reserva = $9 returning *';
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id, id_reserva]);
        await this.client.end()
        return resultado.rows [0];
    } 
    //eliminar
    async deleteReserva (id_reserva:any){
        const queryStr=
        'DELETE FROM reserva WHERE id_reserva = $1 returning *'
        console.log('intentando conectar', id_reserva)
        await this.client.connect();
        console.log('conectado')
        console.log('esperando la query')
        const resultado:any = await this.client.query(queryStr,[id_reserva]);
        console.log('query ok')
        await this.client.end();
        console.log('conexion cerrada')
        return resultado.rows [0];
    }
}

//editar y otra de añadir

export default new Reserva(connection());
