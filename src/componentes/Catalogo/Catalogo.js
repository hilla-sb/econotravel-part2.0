import React from 'react';
import catalogo from '../../experiencias.json';
import { Link } from 'react-router-dom';

export default function Catalogo () {

  let listaCatalogo = catalogo;
  
  return listaCatalogo.map((el, i) => (

    
    <div classname="catalogo">
      <h1>Experiencias en el área de Barcelona</h1>
      <Link to='/'>Ubicación</Link>
      <Link to='/'>Transporte</Link>
      <Link to='/'>Duración</Link>

      <div>
        <img width={"400px"} heigh={"600px"} src={el.img}/>
        <div>
          <button >{el.eti1}</button>
          <button >{el.eti2}</button>
          <button >{el.eti3}</button>
        </div>
        <div>
          <p>{el.eti1}</p>
          <p>{el.precio}</p>
        </div>
        {/* <link>Reserva ahora</link> */}
      </div>

    
    </div>
  ))
}