export interface iUsuariologin{
  email: string;
  password: string;
}

export interface iUsuario extends iUsuariologin{
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
  direccion?: string;
  cp?:string;
  telefono?:number;
  reserva_id:number; 
}