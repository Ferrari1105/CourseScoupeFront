import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { UsuarioContext } from "./../../context/usuarioContext"


function NavBar() {
  const {usuarioG}= useContext(UsuarioContext)
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
            <div>  
              <p className='usuario-navbar-Nombre'>{usuarioG?.NombreUsuario}</p>
            </div>
              <Link to={"/Profile"}>
                <Image className='usuario-navbar-foto' src="https://pbs.twimg.com/media/EIOHEVlXkAE0QWW.jpg" rounded />
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
