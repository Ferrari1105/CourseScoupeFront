import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'

function NavBar() {
  return (
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
            <Nav.Link href="#deets" className='colorTexto'>Iniciar Sesion</Nav.Link>
            <Nav.Link href="#memes" className='colorTexto'>Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
/*
                */
export default NavBar;