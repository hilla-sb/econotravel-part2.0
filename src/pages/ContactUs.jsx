import React from "react";
import { Link } from "react-router-dom";
import Marina from '../componentes/img/marina.jpg';

export default function QuienesSomos() {
  return (
    <div className="contact-us">
      <img src="" alt="">
        (LOGO)
      </img>
      <h1>Econotravel: Experiencias en el área de Barcelona</h1>
      <h2>- Quiénes somos -</h2>
      <h3>Misión</h3>
      <p>
        Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora,
        Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001.
        Durante ese periodo, descubrió que las opciones turísticas que ofrecían
        ciudades como Barcelona, Girona y Reus dependían de transportes
        contaminantes y actividades poco respetuosas con la naturaleza y el
        entorno, algo que causaba un progresivo deterioro de los increíbles
        parajes naturales de Cataluña. Preocupada por la falta de alternativas
        eco-friendly, Marina se propuso fundar una agencia de experiencias
        turísticas donde el respeto por la naturaleza fuera la principal
        prioridad. Así nació Econotravel Barcelona.
      </p>
      <img src={Marina} alt="Marina Herrán, fundadora de Econotravel"></img>
      <h6>Marina Herrán, fundadora de Econotravel</h6>
      <h5>Contacto</h5>
      <p>Teléfono: 93 123 45 67 </p>
      <p className="correo">Correo: </p>
      <Link.Text>info@econotravel.com</Link.Text>
      <p>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</p>
    </div>
  );
}
