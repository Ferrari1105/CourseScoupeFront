import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function NavBar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="1234"
                autoFocus
              />
            </Form.Group>
            <div className='modalDiv'>
            <Button className='botonModal' onClick={handleClose} >Entrar</Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Body>
          <div className='footerDiv'>
          <Button variant="secondary" onClick={handleClose}>
            Inicia Sesion Con Google
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Inicia Sesion Con Facebook
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container >
      <Image className='LogoNavFoto ' src="./Logo.png" rounded />
        <Navbar.Brand href="#home" className='colorTexto'>Course Scoupe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='colorTexto'>Mis Presentaciones</Nav.Link>
          </Nav>
     <Form className="SearchBar">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        />
      <Button variant="outline-success" className='colorTexto'>Search</Button>
    </Form>
          <Nav>
            <Button  className='colorTexto sinFondo' onClick={handleShow} >Iniciar Sesion</Button>
            <Button  className='colorTexto sinFondo' >Registrarse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
  );
}

export default NavBar;