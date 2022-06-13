import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ComoFunciona() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="row mt-4 h-25 w-75">
            <div className="card">
              <div className="card-title secondary">
                <h1 className="card-text">Como Funciona nuestra página?</h1>
                <br />
                <p>En nuestra tienda usted prodrá: </p>
                <ul>
                  <li>
                    Obtener información sobre nuestros servicio y sobre la
                    empresa.
                  </li>
                  <li>
                    Buscar, encontrar, evaluar y comparar nuestros servicios.
                  </li>
                  <li>Seleccionar servicios.</li>
                  <li>Comparar precios con otras empresas.</li>
                  <li>Obtener descuentos según la temporada</li>
                  <li>Realizar compras.</li>
                  <li>Pagar por las reservas realizadas</li>
                  <li>
                    Obtener información sobre sus reservas actuales o antiguas.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
