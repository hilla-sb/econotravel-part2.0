import React from 'react';
import catalogo from '../experiencias.json';
import { Link } from 'react-router-dom';

export default function Catalogo () {

  let listaCatalogo = catalogo;
  
  return listaCatalogo.map((el, i) => (

    
    <div classname="catalogo">

      <div>
      <Link to={`/detalle/${el.id}`}>
        <img width={"400px"} heigh={"600px"} src={el.img}/>
      </Link>
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