import React from 'react';
import MisReservas from './MisReservas';

// pagina mi perfil/* opcional

export default function Perfil () {
  return (
    <div className="perfil">
        <img src="" href="" alt="">(LOGO)</img>
            <Table>
                <ul>
                    <li>Mi perfil</li>
                    <li>Mis reservas <MisReservas/></li>
                </ul>
            </Table>
        <div>
            <Form>
                <Button>Guardar</Button> {/* button opcional */}
            </Form>
        </div>
    </div>
  )
}