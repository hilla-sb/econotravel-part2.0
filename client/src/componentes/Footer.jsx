import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="card">
      <div className="card-title">
        <div className="card-text">
          <Link to="/comofunciona"> ¿Como funciona? </Link>

          <Link to="/quienessomos"> ¿Quienes somos? </Link>

          <Link to="/metodosdepago"> Métodos de Pago </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
