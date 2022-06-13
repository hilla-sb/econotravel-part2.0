import React from "react";
import { Link } from "react-router-dom";
import Marina from "../componentes/img/marina.jpg";
import Logo1 from "../componentes/img/logotrans1.png";

const QuienesSomos = () => {
  return (
    <div className="card">
      
      <Link to="/">
        <img classname="" src={Logo1} alt="logo"></img>
      </Link>
      <div className="p-5 card-text secondary">
        <h1>Econotravel: Experiencias en el área de Barcelona</h1>
        <br/>
        <h2> - Quiénes somos - </h2>
        <br/>
        <h4>Misión</h4>
        <div class="paragraphs">
  <div class="row">
    <div class="span4">
      <div class="clearfix content-heading">
        <img src={Marina} alt="Marina, la fundadora"></img>
        <h6>Marina Herrán, fundadora de Econotravel</h6>
        </div>
        <p className="d-inline-flex p-2">
          Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora,
          Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001.
          Durante ese periodo, descubrió que las opciones turísticas que
          ofrecían ciudades como Barcelona, Girona y Reus dependían de
          transportes contaminantes y actividades poco respetuosas con la
          naturaleza y el entorno, algo que causaba un progresivo deterioro de
          los increíbles parajes naturales de Cataluña. Preocupada por la falta
          de alternativas eco-friendly, Marina se propuso fundar una agencia de
          experiencias turísticas donde el respeto por la naturaleza fuera la
          principal prioridad. Así nació Econotravel Barcelona.
        </p>
       
        
        <br/>
        <h5>Contacto</h5>
        <p>Teléfono: 93 123 45 67 </p>
        <p className="correo">Correo:  </p>
        <p>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</p>
        </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default QuienesSomos;
