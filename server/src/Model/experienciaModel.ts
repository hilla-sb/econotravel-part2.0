import { connection } from "../database.service";

class Experiencia {
    async getExperiencias(){
        const queryStr= 'SELECT * FROM experiencia'
        const result:any = await connection(queryStr)
        return result.rows;
    }
    async getUnaExperiencia(id:any){
        const queryStr='SELECT * FROM experiencia WHERE id=$1'
        const result:any = await connection(queryStr, [id])
        return result.rows;
    }
}