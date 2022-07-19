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
    //editar
    
    //eliminar
    async deleteReserva (id_reserva:number){
        const queryStr='DELETE FROM reserva WHERE id_reserva = $1 returning *'
        const resultado = await this.client.query(queryStr,[id_reserva]);
        await this.client.end()
        return resultado.rows;
    }
}

export default new Reserva(connection());
