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

        <Link className="btn btn-outline-light btn-lg" role="button" to="./ComoFunciona"> ¿Cómo funciona? </Link>

        <Link className="btn btn-outline-light btn-lg" role="button" to="./ContactUs"> About Us </Link>

        <Link className="btn btn-outline-light btn-lg" role="button" to="./MetodosDePago"> ¿Cómo funciona? </Link>

      </div>
    )
  }
  export default Footer;