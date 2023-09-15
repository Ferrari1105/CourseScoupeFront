import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; // Importar el componente Modal
import './banner.css';
import { useContext } from "react"
import { UsuarioContext } from "./../../context/usuarioContext"
function Banner( ) {
  
  const {usuarioG} = useContext(UsuarioContext)
  const [showModal, setShowModal] = useState(false); // Estado para controlar si se muestra el modal

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Row>
        <Col className='banner'>
          <div className='banner-text'>
            <h4>Course Scope Lo que queres ser, a un curso de distancia</h4>
            <br />
            <h5>Course Scope la mejor pagina de cursos al alcance de todos</h5>
          </div>
          <div className='banner-buttons'>
            {usuarioG? (
              <Link className='Link' to="/CrearCurso">Crear Curso</Link >
            ) : (
              <Link className='Link' onClick={handleShow}>Crear Curso</Link>
            )}
            <Link className='Link'>Crear Presentacion</Link>
          </div>
        </Col>
        <Col className='LogoBanner'>
          <Image className='LogoBannerFoto' src="src\Imgs\Logo.png" rounded />
        </Col>
      </Row>
      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Debes iniciar sesión para crear un curso.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button >
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Banner;
