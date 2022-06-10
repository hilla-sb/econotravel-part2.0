import React from 'react'
import { Link } from 'react-router-dom'
import destacados from '../../experiencias.json';
import Catalogo from '../catalogo/Catalogo';
import { Button } from 'react-bootstrap';
import { Linkx } from 'react-router-dom';



export default function Destacados() {

  let listaDestacados = destacados.slice(0,3);

  return listaDestacados.map((el, i) => (
    <div key={el.id} className="destacados">
       <h1 onClick={Catalogo}>Experiencias en el área de Barcelona</h1>
      <Link.Text>Ubicación</Link.Text>
      <Link.Text>Transporte</Link.Text>
      <Link.Text>Duración</Link.Text>
      <div>
        <img width={"400px"} src={el.img} />
        <div>
          <Button variant="secondary">{el.eti1}</Button>
          <Button variant="secondary">{el.eti2}</Button>
          <Button variant="secondary">{el.eti3}</Button>
        </div>
        <div>
          <p>{el.eti1}</p>
          <p>{el.precio}</p>
        </div>
        <Link.Text onClick={Reserva} >Reserva ahora</Link.Text>
      </div>
    </div>
  ))}
