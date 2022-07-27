import { connection } from "../services/database.service";
import { Pool } from "pg";
import iReserva from "./interfaces/iReserva";

class Reserva {
    client: Pool;
    constructor(client:any) {
      this.client = client
    }
    async getReservas(){
        const queryStr= 'SELECT * FROM reserva'
        const resultado = await this.client.query(queryStr);
        return resultado.rows;
    }
    async getUnaReserva(id_reserva:number){
        const queryStr='SELECT * FROM reserva WHERE id_reserva=$1'
        const resultado = await this.client.query(queryStr,[id_reserva]);
        return resultado.rows [0];
    }
    //añadir
    async addReserva(id_reserva: iReserva){
        try {const queryStr =
            'INSERT INTO reserva(nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *';
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
        const resultado = await this.client.query(queryStr,[nombre, apellidos, direccion, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id, id_reserva]);
        return resultado.rows [0];
    } 
    //eliminar
    async deleteReserva (id_reserva:any){
        const queryStr =
        'DELETE FROM reserva WHERE id_reserva = $1 returning *'
        const resultado: any = await this.client.query(queryStr,[id_reserva]);
        return resultado.rows[0];
    }
}

export default new Reserva(connection());
