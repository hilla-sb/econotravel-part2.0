import {connection} from '../services/database.service';
import {iUsuario, iUsuariologin} from './interfaces/iUsuario';
import { Client } from 'pg'

class Usuario{
  client: Client;
    constructor(client:any) {
      this.client = client
    }
  
  async saveUsuario(usuario:iUsuario){
    try {
      const queryStr = 'INSERT INTO "usuario"(email,password,nombre) VALUES($1,$2,$3) RETURNING *'
      const values = [usuario.email,usuario.password,usuario.nombre ||null]
     /*  const cliente = await connection(); */
      await this.client.connect()
      const resultado = await this.client.query(queryStr, values);
      await this.client.end()
      return resultado.rows[0];
      
    } catch (error) {
      console.log(error)
    }
  }
  async getUsuario(usuario:iUsuariologin){

    const queryStr = 'SELECT * FROM "usuario" WHERE email = $1'
    const values = [usuario.email]
    /* const cliente = await connection(); */
    await this.client.connect()
    const resultado = await this.client.query(queryStr, values);
    await this.client.end()
    return resultado.rows[0];
  }
}

export default new Usuario(connection());