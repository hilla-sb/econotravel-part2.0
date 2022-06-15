import React from 'react';
import Button from 'react-bootstrap/Button';
import imgexperiencias from '../experiencias.json';
import CheckList from '../componentes/img/icons/checklist.png';

export default function Reserva () {
  return (
    <div className="reserva">
        <img src={imgexperiencias[0].img} alt="Imagen de la experiencia"/>
        <h1>Formulario de reserva</h1>
        <div>Reserva</div>
        
        <div className="card">
        <div className='card-title'>
        <div className='card-text'>
              <p>Precio</p>
              <p>Experiencia Reservada:</p>
              <p>Quantidad: 1</p>
              <Button/>
          <h6>Garantías Econotravel:</h6>
          <img src={CheckList} alt="icono checklist">99% de clientes satisfechos</img>
          <img src={CheckList} alt="icono checklist">Colaboradores de calidad</img>
          <img src={CheckList} alt="icono checklist">Pago 100% seguro</img>
          </div>
          </div>
        </div>
    </div>
  )
}