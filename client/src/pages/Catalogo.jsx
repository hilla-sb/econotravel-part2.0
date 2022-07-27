import catalogo from '../experiencias.json'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Catalogo = () => {
  const [experiencias, setExperiencias] = useState([])
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + 'experiencias')
      .then(response => {
        console.log(response.data.experiencias)
        setExperiencias(response.data.experiencias)
      })
  }, [])

  return experiencias.map((exp) => (
    <div className="catalogo">
      <Link to={`/detalle/${exp.id_experiencia}`}>
        <img width={'400px'} heigh={'600px'} className="imagenDestacados" src={exp.img} />
      </Link>
      <div className="etiquetasDetalle">
        <Button variant="secondary">{exp.ubicacion}</Button>
        <Button variant="secondary">{exp.transporte}</Button>
        <Button variant="secondary">{exp.tiempo}</Button>
      </div>
      <div className='miniDescripcion'>
        <div>
          <p>{exp.ubicacion}</p>
          <p>{exp.precio}</p>
        </div>
        <Link to="/reserva" className='reserva'>Reserva ahora</Link>
      </div>
    </div>
  ))
}

export default Catalogo;

  



