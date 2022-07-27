import { connection } from "../services/database.service";
import { iUsuario, iUsuariologin } from "./interfaces/iUsuario";
import { Pool } from "pg";

class Usuario {
  client: Pool;
  constructor(client: any) {
    this.client = client;
  }

  async getUsuarios() {
    try {
      const queryStr = 'SELECT * FROM usuario'
      const resultado: any = await this.client.query(queryStr,[]);
      return resultado.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async getUnUsuario(usuario: iUsuariologin) {
    try {
      const queryStr = 'SELECT * FROM usuario WHERE email = $1';
      const values = [usuario.email];
      const resultado = await this.client.query(queryStr, values);
      return resultado.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async saveUsuario(usuario:iUsuario) {
    try {
      const queryStr =
        'INSERT INTO "usuario"(email, password, nombre, apellidos) VALUES($1,$2, $3, $4) RETURNING *';
      const values = [usuario.email, usuario.password, usuario.nombre, usuario.apellidos || null];
      const resultado = await this.client.query(queryStr, values);
      return resultado.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(email: string, password:string) {
    try {
      const queryStr =
        'SELECT * FROM usuarios WHERE email = $1'
      const resultado = await this.client.query(queryStr, [email, password]);
      console.log(resultado.rows)
      return resultado.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
}
export default new Usuario(connection());