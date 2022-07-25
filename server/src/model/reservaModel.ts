import { connection } from "../services/database.service";
import { Client } from 'pg';
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
    async addReserva(id_reserva:iReserva){
        const queryStr='INSERT INTO reserva(nombre, apellidos, fecha_inicio, fecha_fin, cantidad, precio_total, experiencia_id, direccion) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        console.log('intentando conectar', id_reserva)
        await this.client.connect()
        console.log('conectado')
        console.log('esperando la query')
        const resultado = await this.client.query(queryStr,[id_reserva.nombre, id_reserva.apellidos, id_reserva.fecha_inicio, id_reserva.fecha_fin, id_reserva.cantidad, id_reserva.precio_total, id_reserva.experiencia_id, id_reserva.direccion] as string[]);
        console.log('query ok')
        await this.client.end()
        console.log('conexion cerrada')
        return resultado.rows[0];
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
    async deleteReserva (id_reserva:any){
        const queryStr='DELETE FROM reserva WHERE id_reserva = $1 returning *'
        console.log('intentando conectar', id_reserva)
        await this.client.connect()
        console.log('conectado')
        console.log('esperando la query')
        const resultado = await this.client.query(queryStr,[id_reserva]);
        console.log('query ok')
        await this.client.end()
        console.log('conexion cerrada')
        return resultado.rows [0];
    }
}





//editar y otra de añadir

export default new Reserva(connection());
