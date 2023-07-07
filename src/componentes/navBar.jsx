import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'
import { useId, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom' 
import { useContext } from "react"
import { UsuarioContext } from "./../../context/usuarioContext"

function NavBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [error, setError] = useState(false)
    const linkHome = useId()
    const {setUsuarioG} = useContext(UsuarioContext)
    const [usuario, setUsuario] = useState()
    const handleChange = e => {
      setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) =>{
      e.preventDefault()
      try {
        // 1. Comprobar si el usuario ya está en la BD
        const response = await fetch(`http://localhost:3000/usuarios/${usuario.nombre}`)
        const usuarioNombre= await response.json()
        // 2. Si está, logearlo | LOG IN
        if (usuarioNombre.Contraseña === usuario.contraseña) document.getElementById(linkHome).click(), setUsuarioG(usuarioNombre) // LOG IN
        else console.log("contra incorrecta") // CONTRASEÑA INCORRECTA
      } catch {
        // 3. Si no está, crearlo y logearlo | SIGN IN
        try {
          // crear usuario
          console.log("usuario", JSON.stringify(usuario))
          const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { "Accept": 'application/json', "Content-Type": 'application/json' },
            body: JSON.stringify(usuario)
          })
          const dbUser = await response.json()
          // logear usuario
          setUsuarioG(dbUser)
          console.log("dbUser", dbUser)
        //  document.getElementById(linkHome).click()
        }
        catch (error){
          throw new Error(error)
        }
      }
    }

  return (
    <>
    <Link to={'/homeiniciada'} className='d-none' id={linkHome} >Entrar</Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="user1234"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="contraseña"
                placeholder="1234"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <div className='modalDiv'>
            <Button  className='botonModal' type="submit">Entrar</Button>
            </div>
          </Form>
          {error && <p className='error'>Fijense que todos los campos esten correctamente llenados</p>}
        </Modal.Body>
        <Modal.Body>
          <div className='footerDiv'>
          <Button variant="secondary" onClick={handleClose}>
          <Link to={"/homeiniciada"}>Inicia Sesion Con Google</Link>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link to={"/homeiniciada"}>Inicia Sesion Con Facebook</Link>
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container className='navbar-container' >
      <Image className='LogoNavFoto ' src="src\Imgs\Logo.png" rounded />
        <Navbar.Brand  className='colorTexto'><Link to={"/"}>Course Scoupe</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"./MisPresentaciones"} className='colorTexto'>Mis Presentaciones</Link> 
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
          <Nav className='navbar-button-container'>
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