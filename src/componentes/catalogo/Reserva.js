import React from 'react';
import Button from 'react-bootstrap/Button';
import imgexperiencias from '../../experiencias.json';

export default function Reserva () {
  return (
    <div className="reserva">
        <img src={imgexperiencias[0].img} alt="Imagen de la experiencia"/>
        <h1>Formulario de reserva</h1>
        <div>Reserva</div>
        
        <div className="reserva">
              <p>Precio</p>
              <p>Experiencia Reservada:</p>
              <p>Quantidad: 1</p>
              <Button/>
          <h6>Garantías Econotravel:</h6>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs_DW0QUJj3qFpswqKgYi5ERup3ioUz2NOQ&usqp=CAU " alt="icono checklist">99% de clientes satisfechos</img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs_DW0QUJj3qFpswqKgYi5ERup3ioUz2NOQ&usqp=CAU " alt="icono checklist">Colaboradores de calidad</img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXs_DW0QUJj3qFpswqKgYi5ERup3ioUz2NOQ&usqp=CAU " alt="icono checklist">Pago 100% seguro</img>
        </div>
    </div>
  )
}