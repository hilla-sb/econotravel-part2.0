export default interface iReserva{
    id_reserva:number;
    nombre:string;
    direccion?:string;
    apellidos:string;
    fecha_inicio:number;
    fecha_fin:number;
    cantidad:number;
    precio_total:number;
    experiencia_id:number;
}