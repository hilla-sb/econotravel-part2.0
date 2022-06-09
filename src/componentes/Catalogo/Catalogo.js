import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import catalogo from '../../experiencias.json';

export default function Catalogo () {

  let listaCatalogo = catalogo;
  
  return listaCatalogo.map((el, i) => (

    
    <div classname="catalogo">

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