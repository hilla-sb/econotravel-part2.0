import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Footer() {
    const pagos = useState();
    function handleClick(path) {
      pagos.push(path);
    }
    return (
      <div className="foot">

        <Link to="./comofunciona" > ¿Como funciona? </Link>

        <Link to="./ContactUs" > About Us </Link>

        <Link to="./MetodosDePago" > ¿Cómo funciona? </Link>

      </div>
    )
  }
  export default Footer;