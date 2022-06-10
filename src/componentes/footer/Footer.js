import React, { useState } from "react";
import ComoFunciona from "./ComoFunciona";
import ContactUs from "./ContactUs";
import MetodosDePago from "./MetodosDePago";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Footer() {
    const pagos = useState();
    function handleClick(path) {
      pagos.push(path);
    }
    return (
      <div className="foot">

        <Link to="./ComoFunciona" className="btn btn-outline-light btn-lg" role="button" > ¿Cómo funciona? </Link>

        <Link to="./ContactUs" className="btn btn-outline-light btn-lg" role="button" > About Us </Link>

        <Link to="./MetodosDePago" className="btn btn-outline-light btn-lg" role="button" > ¿Cómo funciona? </Link>

      </div>
    )
  }
  export default Footer;