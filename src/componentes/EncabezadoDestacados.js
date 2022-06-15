import React from 'react'
import { Link } from 'react-router-dom'

function EncabezadoDestacados() {
  return (
    <div>
        <Link to="/catalogo">
          <h1>Experiencias en el área de Barcelona</h1>
        </Link>
        <Link to="/">Ubicación</Link>
        <Link to="/">Transporte</Link>
        <Link to="/">Duración</Link>
    </div>
  )
}

export default EncabezadoDestacados