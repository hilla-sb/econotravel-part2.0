import React from 'react'
import { Link } from 'react-router-dom'
import destacados from '../../experiencias.json';


export default function Destacados() {

  let listaDestacados = destacados.slice(0,3);

  return listaDestacados.map((el, i) => (
    <div key={el.id} className="destacados">
      {/* <h1>Experiencias en el área de Barcelona</h1>
      <Link>Ubicación</Link>
      <Link>Transporte</Link>
      <Link>Duración</Link> */}

      <div>
        <img width={"400px"} src={el.img} />
        <div>
          <button >{el.eti1}</button>
          <button >{el.eti2}</button>
          <button >{el.eti3}</button>
        </div>
        <div>
          <p>{el.eti1}</p>
          <p>{el.precio}</p>
        </div>
        {/* <Link>Reserva ahora</Link> */}
      </div>
    </div>
  ))}
