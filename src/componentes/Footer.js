import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    
    return (
      <div className="foot">

        <Link to="/comofunciona" > ¿Como funciona? </Link>

        <Link to="/quienessomos" > ¿Quienes somos? </Link>

        <Link to="/metodosdepago" > Métodos de Pago </Link>

      </div>
    )
  }
  export default Footer;