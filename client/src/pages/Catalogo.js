import React from 'react'
import catalogo from '../experiencias.json'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Catalogo() {
  let listaCatalogo = catalogo

  return listaCatalogo.map((el, i) => (
    <div className="catalogo">
      <Link to={`/detalle/${el.id}`}>
        <img width={'400px'} heigh={'600px'} className="imagenDestacados" src={el.img} />
      </Link>
      <div className="etiquetasDetalle">
        <Button variant="secondary">{el.eti1}</Button>
        <Button variant="secondary">{el.eti2}</Button>
        <Button variant="secondary">{el.eti3}</Button>
      </div>
      <div className='miniDescripcion'>
        <div>
          <p>{el.eti1}</p>
          <p>{el.precio}</p>
        </div>
        <Link to="/reserva" className='reserva'>Reserva ahora</Link>
      </div>
    </div>
  ))
}
