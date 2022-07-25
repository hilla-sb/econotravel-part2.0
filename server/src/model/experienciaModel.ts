import { connection } from "../services/database.service";
import { Client } from 'pg';
import iExperiencia from "./interfaces/iExperiencia";

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
        await this.client.connect()
        const resultado = await this.client.query(queryStr,[id_experiencia]);
        await this.client.end()
        return resultado.rows[0];
    }
    // añadir experiencia
    async addExperiencia (id_exp:iExperiencia){
        const queryStr='INSERT INTO experiencia (nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *'
        console.log('intentando conectar', id_exp)
        await this.client.connect()
        console.log('conectado')
        console.log('esperando la query')
        const resultado:any = await this.client.query(queryStr,[id_exp.nombre, id_exp.img, id_exp.descripcion,id_exp.precio, id_exp.duracion, id_exp.accesibilidad, id_exp.ubicacion, id_exp.transporte, id_exp.tiempo] as string[]);
        console.log('ha leido la query')
        await this.client.end()
        console.log('cerrando el cliente')
        return resultado.rows[0];
    }
    //editar experiencia
    async editExperiencia (id_exp:any){
        const queryStr='UPDATE experiencia (nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo) SET ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *'
        console.log('intentando conectar', id_exp)
        await this.client.connect()
        console.log('conectado')
        console.log('esperando la query')
        const resultado = await this.client.query(queryStr,[id_exp]);
        console.log('ha leido la query')
        await this.client.end()
        console.log('cerrando el cliente')
        return resultado.rows[0];
    }

    //eliminar experiencia
    async deleteExperiencia (id_exp:any){
        const queryStr='DELETE FROM experiencia WHERE id_experiencia = $1 returning *'
        console.log('intentando conectar', id_exp)
        await this.client.connect()
        console.log('conectado')
        console.log('esperando la query')
        const resultado:any = await this.client.query(queryStr,[id_exp]);
        console.log('ha leido la query')
        await this.client.end()
        console.log('cerrando el cliente')
        return resultado.rows[0];
    }
}

export default new Experiencia(connection());