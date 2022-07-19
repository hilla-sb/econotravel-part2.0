import { connection } from "../services/database.service";
import { Client } from 'pg';

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
        return resultado.rows;
    }
    async getUnaReserva(id_reserva:number){
        const queryStr='SELECT * FROM reserva WHERE id=$1'
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[id_reserva]);
        await this.client.end()
        return resultado.rows;
    }
    //añadir
    async addReserva(id_reserva:number){
        const queryStr='INSERT INTO reserva(id_reserva, nombre, apellidos, dirección, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[]);
        await this.client.end()
        return resultado.rows;
    }
    //editar
    /* async editReserva(id_reserva:number){
        const queryStr='UPDATE reserva(id_reserva, nombre, apellidos, dirección, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[]);
        await this.client.end()
        return resultado.rows;
    } */
    //eliminar
    async deleteReserva (id_reserva:number){
        const queryStr='DELETE FROM reserva WHERE id_reserva = $1 returning *'
        const resultado = await this.client.query(queryStr,[id_reserva]);
        await this.client.end()
        return resultado.rows;
    }
}

export default new Reserva(connection());
