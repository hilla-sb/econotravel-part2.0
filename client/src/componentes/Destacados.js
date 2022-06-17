import React from 'react'
import destacados from '../experiencias.json'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Destacados() {
  let listaDestacados = destacados.slice(0, 3)

  return listaDestacados.map((el, i) => (
    <div key={el.id} className="destacados">
      <Link to={`/detalle/${el.id}`}>
        <img
          alt="experience"
          width={'400px'}
          className="imagenDestacados"
          src={el.img}
        />
      </Link>
      <div className="etiquetasDetalle">
        <Button variant="secondary">{el.eti1}</Button>
        <Button variant="secondary">{el.eti2}</Button>
        <Button variant="secondary">{el.eti3}</Button>
      </div>
      <div className="miniDescripcion">
        <div>
          <p>{el.eti1}</p>
          <p className='precio'>{el.precio}</p>
        </div>
        <Link to="/reserva" className="reserva">
          Reserva ahora
        </Link>
      </div>
    </div>
  ))
}
