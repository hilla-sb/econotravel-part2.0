import { connection } from "../services/database.service";
import { Client, Pool } from "pg";
import iExperiencia from "./interfaces/iExperiencia";

class Experiencia {
  client: Pool;
  constructor(client: any) {
    this.client = client;
  }
  async getExperiencias() {
    const queryStr = "SELECT * FROM experiencia";
    const resultado = await this.client.query(queryStr);
    return resultado.rows;
  }
  async getUnaExperiencia(id_experiencia: any) {
    const queryStr = "SELECT * FROM experiencia WHERE id_experiencia=$1";
    const resultado = await this.client.query(queryStr, [id_experiencia]);
    return resultado.rows[0];
  }
  // añadir experiencia
  async addExperiencia(id_exp: iExperiencia) {
    const queryStr =
      "INSERT INTO experiencia (nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *";

    const resultado: any = await this.client.query(queryStr, [
      id_exp.nombre,
      id_exp.img,
      id_exp.descripcion,
      id_exp.precio,
      id_exp.duracion,
      id_exp.accesibilidad,
      id_exp.ubicacion,
      id_exp.transporte,
      id_exp.tiempo,
    ] as string[]);

    return resultado.rows[0];
  }
  //editar experiencia
  async editExperiencia(id_exp: any, body: iExperiencia) {
    const {
      nombre,
      img,
      descripcion,
      precio,
      duracion,
      accesibilidad,
      ubicacion,
      transporte,
      tiempo,
    }: iExperiencia = body;

    const queryStr =
      "UPDATE experiencia SET (nombre, img, descripcion, precio, duracion, accesibilidad, ubicacion, transporte, tiempo)=($1, $2, $3, $4, $5, $6, $7, $8, $9) WHERE id_experiencia =$10  returning *";

    const resultado = await this.client.query(queryStr, [
      nombre,
      img,
      descripcion,
      precio,
      duracion,
      accesibilidad,
      ubicacion,
      transporte,
      tiempo,
      id_exp,
    ]);

    return resultado.rows[0];
  }

  //eliminar experiencia
  async deleteExperiencia(id_exp: any) {
    const queryStr =
      "DELETE FROM experiencia WHERE id_experiencia = $1 returning *";

    const resultado: any = await this.client.query(queryStr, [id_exp]);

    return resultado.rows[0];
  }
}

export default new Experiencia(connection());
