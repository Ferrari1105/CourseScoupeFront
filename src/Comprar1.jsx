import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Importa useLocation de react-router-dom
import NavBar from './componentes/navBar';
import './Comprar1.css';

function Comprar1() {
  const location = useLocation();
  const image = location.state ? location.state.image : null; // Verifica si location.state existe

  return (
    <>
      <NavBar />
      <div className='comprar1-container'>
        <Modal.Dialog id="modal1" centered size="xl">
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <h2>Carrito</h2>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <div className='comprar1-container2'>
        <Modal.Dialog id="modal2" centered size="xl">
          <Modal.Header></Modal.Header>
          <Modal.Body>
            {image && <img className="img" src={image} alt="" />}
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default Comprar1;
    