import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button, Badge } from 'react-bootstrap';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { UsuarioContext } from "./../../context/usuarioContext"
import { useEffect } from 'react';
import { useState } from 'react';
import { CarritoContext } from '../../context/carritoContext';

function NavBar() {

  const {usuarioG}= useContext(UsuarioContext)
  const [cantCarrito, setCantCarrito] = useState([]);
  const {carritoG} = useContext(CarritoContext)

  const llamada = async () => {
    const usuarioGJSON = JSON.stringify(usuarioG);
    const response = await fetch(`http://localhost:3000/traerCarrito`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: usuarioGJSON
    });
    const CarritoUsuario = await response.json();
    setCantCarrito(CarritoUsuario)
  }
  
  useEffect(() => {
    llamada();
  }, [carritoG]);
  
  return (
    <>
    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container className='navbar-container' >
        <Image className='LogoNavFoto' src="src\Imgs\Logo.png" rounded />
        <Navbar.Brand className='colorTexto'><Link to={"/"}>Course Scoupe</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav className='colorTexto'>
              <Link to={"/MisPresentaciones"}>Mis Presentaciones</Link>
            </Nav>
          </Nav>
          <Form className="SearchBar">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success" className='colorTexto'>Search</Button>
          </Form>
          <Nav className='navbar-container usuario-navbar'>
              <Link to={"/Profile"}>
            <div className='cuadrado-perfil'>  
              <p className='usuario-navbar-Nombre'>{usuarioG?.NombreUsuario}</p>
                <Image className='usuario-navbar-foto' src={usuarioG?.FotoDePerfil} rounded />
            </div>
              </Link>
              <Link to={"/CarritoDeCompras"}>
                
              <div className='carrito'>
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="66" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
               <Badge pill bg="danger" className='notificaciones'>{cantCarrito.length || 0}</Badge>
              </div>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
