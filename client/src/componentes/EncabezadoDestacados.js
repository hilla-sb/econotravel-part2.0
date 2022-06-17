import React from 'react'
import { Link } from 'react-router-dom'

function EncabezadoDestacados() {
  
  return (
    <div>
        <Link to="/catalogo">
          <h1 className='encabezadoDestacados'>Experiencias en el área de Barcelona</h1>
        </Link>
    </div>
  )
}

export default EncabezadoDestacados