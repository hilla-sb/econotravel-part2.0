import react from 'react'
import { Breadcrumb, Navbar } from 'react-bootstrap'

export default function Detalle () {
  return (
    <>
      <Navbar/>
      <Breadcrumb>Home. Montaña. Bicicleta.</Breadcrumb>
      <h1>Paseo en bicicleta por el Montseny</h1>
      <img src="" alt=""></img>
      <p>Descripción de la actividad</p>
      <p>Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.</p>
      <Footer/>
    </>
    )
  }
