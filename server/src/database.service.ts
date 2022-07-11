

import { config } from './config'
import { Client } from 'pg'

const url: any = config();
export const connection = (queryStr:string, values:string[]=[]) =>{
    try{
        const client = new Client (url);
        console.log('Connected successfully to server');
        return client.query(queryStr,values);
    } catch (error){
        console.log(error)
    }
}



