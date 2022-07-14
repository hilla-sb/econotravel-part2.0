import { connection } from "../services/database.service";
import { Client } from 'pg';

class Experiencia {
    client: Client;
    constructor(client:any) {
      this.client = client
    }
    async getExperiencias(){
        const queryStr= 'SELECT * FROM experiencia'
        await this.client.connect()
        const resultado = await this.client.query(queryStr);
        await this.client.end()
        return resultado.rows;
    }
    async getUnaExperiencia(id_experiencia:number){
        const queryStr='SELECT * FROM experiencia WHERE id=$1'
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows;
    }
    async deleteExperiencia (id_experiencia:number){
        const queryStr='DELETE FROM experiencia WHERE id_experiencia = $1 returning *'
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows;
    }
}

export default new Experiencia(connection());
