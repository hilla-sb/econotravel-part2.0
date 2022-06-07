import React from 'react';
import Navbar from './Nav.js/Navbar.js.js';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Footer from './Footer.js'; 


export default function Catalogo () {
  return (
    <div classname="catalogo">
      <Navbar/>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1530696849033-05770f765d21?ixlib=rb-1.2.1&ixid=MnwxM[…]yMHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=" Group riding bicicles in a mountain scenery"/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>


{/* //---------------------------------------------------------------------

//====================RAÚL DICE Q NOS PASARÁ ALGO PARA PONER AQUÍ!!!!!!=================== 

      <h1>Experiencias en el área de Barcelona</h1>
      <link>Ubicación</link> 
      <link>Transporte</link>
      <link>Duración</link> 

//_____________________________---------------------_________________________

      <div>
        <img src="" alt="" href="">Exp 1</img>
        <div>
          <p>Etiqueta 1</p>
          <p>Etiqueta 2</p>
          <p>Etiqueta 3</p>
        </div>
      <div>
          <p>Ubicación</p>
          <p>Precio</p>    
      </div>
      <div>
        <link>Reserva ahora</link>
      </div>
      </div>

//__________________________________________________________________________

      <div>
        <img src="" alt="" href="">Exp 2</img>
        <div>
          <p>Etiqueta 1</p>
          <p>Etiqueta 2</p>
          <p>Etiqueta 3</p>
        </div>
      <div>
          <p>Ubicación</p>
          <p>Precio</p>    
      </div>
      <div>
        <link>Reserva ahora</link>
      </div>
      </div>

//__________________________________________________________________________

      <div>
        <img src="" alt="" href="">Exp 3</img>
        <div>
          <p>Etiqueta 1</p>
          <p>Etiqueta 2</p>
          <p>Etiqueta 3</p>
        </div>
      <div>
          <p>Ubicación</p>
          <p>Precio</p>    
      </div>
      <div>
        <link>Reserva ahora</link>
      </div>
      </div>

//---------------------------------------------------------------------

    <Footer/>  */}
    </div>
  )
}