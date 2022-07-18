import { Client } from 'pg'
import { config } from './config'

const url = config();


export const connection = () =>{
    try{
        const client = new Client ({connectionString:url, ssl: {rejectUnauthorized: false}});
        /* await client.connect();    */
        console.log('Connected successfully to server');
        if (client!=undefined) 
        {return client}
        else{throw Error}

    } catch (error){
        console.log(error)
    }
}