import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavBar from './componentes/navBar';
import './MetodoPago.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UsuarioContext } from '../context/usuarioContext';
import NavBarIniciada from './componentes/navBar-iniciada.jsx';

function MetodoPago() {
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
const [qrData, setQrData] = useState(''); // Aquí almacenaremos los datos para el QR
  const { usuarioG } = useContext(UsuarioContext);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleQRPayment = () => {
    // Lógica para generar el QR de pago
    // Dependiendo del proveedor de pago, obtén los datos necesarios para el QR
    // Aquí, utilizaremos un valor ficticio "qrPaymentData" como ejemplo
    const qrPaymentData = 'https://www.ejemplo.com/pago'; // URL o datos del pago

    // Actualiza qrData con los datos para el QR
    setQrData(qrPaymentData);
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleCardPayment = () => {
    // Lógica para procesar el pago con tarjeta de crédito usando cardData
    // Aquí puedes realizar la validación de la tarjeta y enviar los datos al backend
  };


  return (
    <>
      {usuarioG ? <NavBarIniciada /> : <NavBar />}
      <div className="payment-method-selection">
        <h2>Seleccione su método de pago</h2>
        <div className="payment-method-buttons">
          <button className="boton-pagos" onClick={() => handlePaymentMethodSelect('card')}>
            Pagar con Tarjeta
          </button>
          <button className="boton-pagos" onClick={() => handlePaymentMethodSelect('mercadoPago')}>
            Pagar con MercadoPago
          </button>
          <button className="boton-pagos" onClick={() => handlePaymentMethodSelect('paypal')}>
            Pagar con PayPal
          </button>
        </div>
      </div>

      {selectedPaymentMethod === 'card' && (
        <div className="card-payment-form">
          <h3>Ingrese los datos de su tarjeta</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Número de tarjeta"
            value={cardData.cardNumber}
            onChange={handleCardInputChange}
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Fecha de expiración"
            value={cardData.expirationDate}
            onChange={handleCardInputChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardData.cvv}
            onChange={handleCardInputChange}
          />
          <button className="boton-pagos" onClick={handleCardPayment}>Validar Compra</button>
        </div>
      )}

      {(selectedPaymentMethod === 'mercadoPago' ||
        selectedPaymentMethod === 'paypal') && (
        <div className="qr-payment">
          <h3>Escanea el siguiente QR para validar la compra</h3>
          {/* Aquí debes mostrar el QR generado para MercadoPago o PayPal */}
          <button className="boton-pagos" onClick={handleQRPayment}>Generar QR</button>
        </div>
      )}
    </>
  );
}

export default MetodoPago;
