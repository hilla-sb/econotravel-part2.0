import react from 'react'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import Perfil from './Perfil';
import MisReservas from './MisReservas';

export default function Detalle-logged () {
  return (
    <>
      <img src="" alt="">Gorila</img>
      <DropdownMenu>Mi perfil<Perfil/> Mis reservas<MisReservas/> Logout</DropdownMenu>
      <img src="" alt="">Cesta</img>
    </>
    )
  }