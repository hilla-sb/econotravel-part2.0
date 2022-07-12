export interface iUsuariologin{
  email: string;
  password: string;
}

export interface iUsuario extends iUsuariologin{
  nombre? : string; 
}