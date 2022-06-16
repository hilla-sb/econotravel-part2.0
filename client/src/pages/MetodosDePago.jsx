import React from "react";
import { Link } from "react-router-dom";

const MetodosDePago = () => {
  return (
    <div className="card">
      <div className="card-title secondary">
        <div className="card-image">
          {/*VISA*/}
          <Link to="https://www.visa.es/">
            <img
              src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
              className="visa"
              alt="visa"
            />
          </Link>

          {/*PAYPAL*/}
          <Link to="https://www.paypal.com/es/signin">
            <img
              src="https://www.actualidadecommerce.com/wp-content/uploads/2020/10/paypal.png"
              className="paypal"
              alt="paypal"
            />
          </Link>

          {/*TRANFERENCIA*/}
          <Link to="https://www.bbva.es/personas.html">
            <img
              src="https://e7.pngegg.com/pngimages/859/737/png-clipart-wire-transfer-bank-payment-money-electronic-funds-transfer-bank-blue-text.png"
              className="tranferencia"
              alt="Transferencia"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MetodosDePago;
