import React from "react";
import destacados from '../experiencias.json';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Destacados() {
  let listaDestacados = destacados.slice(0, 3);

  return listaDestacados.map((el, i) => (
    <div key={el.id} className="destacados">
      <Container fluid="xl">
      <Row>
        <Col xs={9}>
          <Link to={`/detalle/${el.id}`}>
        <img alt="experience" width={"400px"} src={el.img} />
        </Link>
        <div className="mr-auto p-2">
          <Button variant="secondary">{el.eti1}</Button>
          <Button variant="secondary">{el.eti2}</Button>
          <Button variant="secondary">{el.eti3}</Button>
        </div>
        <div>
          <p>{el.eti1}</p>
          <p>{el.precio}</p>
        </div>
        <Link to="/reserva">Reserva ahora</Link>
        </Col>
        </Row>
      </Container>
    </div>
  ));
}
