import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button, Dropdown } from 'react-bootstrap';
import './NavBar.css'
import { useEffect, useId, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom' 
import { useContext } from "react"
import { UsuarioContext } from "./../../context/usuarioContext"
import GoogleLogin from './Login.jsx';
import {gapi} from 'gapi-script';

const CLIENT_ID = '343392987610-3ol59qmv347dth1niap0o1fu0dibnnvk.apps.googleusercontent.com';

function NavBar() {
  const paises = ['Selecciona un país', 'Argentina', 'Chile', 'Colombia', 'México', 'Perú', 'Otro'];
  const [Pais, paisShow] = useState(paises[0]);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [error, setError] = useState(false)
    const linkHome = useId()
    const {usuarioG,setUsuarioG} = useContext(UsuarioContext)
    const [usuario, setUsuario] = useState({nombre: "", contraseña: "", email:""})
   // const [usuarioCreado, setUsuarioCreado] = useState()
   const [showModal3, setShowModal3] = useState(false); // Estado para controlar si se muestra el modal

   const handleClose3 = () => {
     setShowModal3(false);
   };
 
   const handleShow3 = () => {
     setShowModal3(true);
   };
   const handleChange = e => {
     setUsuario({ ...usuario, [e.target.name]: e.target.value })
     setError(false)
    }
    
    const handleSubmit2 = async(e) =>{
      let usrStringified = JSON.stringify(usuario);
        const response = await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: usrStringified
        })
        const dbUser = await response.json()
        // logear usuario
        setUsuarioG(dbUser)
        //document.getElementById(linkHome).click()
    }
    const handleSubmit = async(e) =>{
      e.preventDefault()
      if(usuario.nombre != "" && usuario.contraseña != "")
      {
        try {
          // 1. Comprobar si el usuario ya está en la BD
          const response = await fetch(`http://localhost:3000/usuarios/${usuario.nombre}`)
          const usuarioNombre= await response.json()
          // 2. Si está, logearlo | LOG IN
          if (usuarioNombre.Contraseña === usuario.contraseña) document.getElementById(linkHome).click(), setUsuarioG(usuarioNombre) // LOG IN
          else{
            console.log("contra incorrecta") // CONTRASEÑA INCORRECTA
            setError(true)
          } 
            
        } catch {
          // 3. Si no está, crearlo y logearlo | SIGN IN
          try {
            // crear usuario
            
            if (window.confirm("El usuario no exite, quiere crearlo?")) {
              handleClose1()
              handleShow2()
            }
            else console.log("no quizo crear")
          }
          catch (error){
            console.log(error);
            throw new Error(error)
          }
        }
        }
        else setError(true)
    }
    useEffect(() => {
      function start() {
        gapi.client.init({
          'clientId': CLIENT_ID,
          scope: 'email',
        })
      }
      gapi.load('client:auth2', start)
    }, [])
  return (
    <>
    <Link to={'/homeiniciada'} className='d-none' id={linkHome} >Entrar</Link>
      <Modal show={show1} onHide={handleClose1} id="modal">
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
            <GoogleLogin/>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2} id="modal">
  <Modal.Header closeButton>
    <Modal.Title>Crear Cuenta nueva</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleSubmit2}>
    <Form.Group className="mb-3">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          name="Nombre"
          placeholder="Tu nombre completo"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de Usuario</Form.Label>
        <Form.Control
          type="text"
          name="NombreUsuario"
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
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="Email"
          placeholder="blablabla@tatata.com"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Breve Descripción</Form.Label>
        <Form.Control
          type="text"
          name="Biografia"
          placeholder="Una breve descripción de ti mismo"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
            <Form.Label>País de Residencia</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="light">
                {Pais}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {paises.map((pais, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => paisShow(pais)}
                   //onChange={ setUsuario({ ...usuario, "Ubicacion":  pais})}
                  >
                    {pais}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
     
      <div className='modalDiv'>
        <Button className='botonModal' type="submit">Crear</Button>
      </div>
      <div className='modalDiv'>
        <Button className='botonModal' onClick={handleClose2}>Cancelar</Button>
      </div>
    </Form>
    {error && <p className='error'>Asegúrate de completar todos los campos correctamente</p>}
  </Modal.Body>
</Modal>

    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container className='navbar-container' >
      <Image className='LogoNavFoto ' src="src\Imgs\Logo.png" rounded />
      {/*hacerlo texto porque el brand tiene un hover predeterminado*/}
        <Navbar.Brand  className='colorTexto'><Link to={"/"}>Course Scoupe</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Link onClick={handleShow3} className='colorTexto'>Mis Presentaciones</Link>
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
            <Button  className='colorTexto sinFondo' onClick={handleShow1} >Iniciar Sesion</Button>
            <Button  className='colorTexto sinFondo' onClick={handleShow2}>Registrarse</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={showModal3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Debes iniciar sesión para ver tus presentaciones.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose3}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
  );
}

export default NavBar;