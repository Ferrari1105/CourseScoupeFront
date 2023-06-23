import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
import { Link } from 'react-router-dom' 
//import {dbUser} from './navBar.jsx'
>>>>>>> 9c7b2784c22c6e6f30df505fbdf5acd7e3ae62a3

function NavBar() {
  return (
    <>
    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container className='navbar-container' >
<<<<<<< HEAD
        <Image className='LogoNavFoto' src="./Logo.png" rounded />
        <Navbar.Brand className='colorTexto'><Link to={"/"}>Course Scoupe</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='colorTexto'>
              <Link to={"/MisPresentaciones"}>Mis Presentaciones</Link>
            </Nav.Link>
=======
      <Image className='LogoNavFoto ' src="./Logo.png" rounded />
        <Navbar.Brand  className='colorTexto'><Link to={"/homeiniciada"}>Course Scoupe</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='colorTexto'><Link to={"/MisPresentaciones"}>Mis Presentaciones</Link></Nav.Link>
>>>>>>> 9c7b2784c22c6e6f30df505fbdf5acd7e3ae62a3
          </Nav>
          <Form className="SearchBar">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success" className='colorTexto'>Search</Button>
          </Form>
          <Nav className='navbar-container'>
            <div>  
              <p className='usuario-navbar-Nombre'>Fran</p>
              <Link to={"/Profile"}>
                <Image className='usuario-navbar-foto' src="https://pbs.twimg.com/media/EIOHEVlXkAE0QWW.jpg" rounded />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
