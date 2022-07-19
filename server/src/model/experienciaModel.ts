import { connection } from "../services/database.service";
import { Client, Pool } from 'pg';

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
    async getUnaExperiencia(id_experiencia:any){
        const queryStr='SELECT * FROM experiencia WHERE id_experiencia=$1'
        console.log('conectando')
        await this.client.connect()
        console.log('esperando la query')
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        console.log('cerrando el cliente')
        const clientecerrado = await this.client.end()
        console.log('cliente cerrado' + clientecerrado)
        console.log('conexion cerrada')
        return resultado.rows[0];
    }
    // añadir experiencia
    async addExperiencia (id_experiencia:number){
        const queryStr='INSERT INTO experiencia (id_experiencia, nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows[0];
    }
    //editar experiencia
    async editExperiencia (id_experiencia:number){
        const queryStr='UPDATE experiencias SET'
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows[0];
    }

    //eliminar experiencia
    async deleteExperiencia (id_experiencia:number){
        const queryStr='DELETE FROM experiencia WHERE id_experiencia = $1 returning *'
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows;
    }
}

export default new Experiencia(connection());