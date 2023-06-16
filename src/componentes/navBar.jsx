import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Form, Button } from 'react-bootstrap';
import './NavBar.css'
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom' 

function NavBar({data}) {
    let baseUrl=""
    const [usuarioApi, setUsuarioApi] = useState()
  
    useEffect(() => async() => {
      const response = await fetch('http://localhost:3000/usuariosXNombre?usuario=Usuario1', {},
      {
        headers: {
             "Content-Type": "application/json"
        }
      })
      const respuesta = await response.json()
      setUsuarioApi(respuesta)
      console.log(usuarioApi)
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [nombre,setNombre]= useState("")

    const [contraseña,setContraseña]= useState("")
  
    const [error, setError] = useState(false)

    const handleSubmit=(e)=>{
      e.preventDefault()
      if (nombre === "" || contraseña === "") {
        console.log(data)
        setError(true)
        return
      }/*else{
       if(a){

       }
      }*/
      setError(false)
    }
   /* iniciarSesion= async()=>
    {
      await axios.get(baseUrl,{params: {username: nombre, password: contraseña }})
      .then(response =>{
        console.log(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    */
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="1234"
                onChange={(e) => setContraseña(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <div className='modalDiv'>
            <Button  className='botonModal' type="submit"><Link >Entrar</Link></Button>
            </div>
          </Form>
          {error && <p className='error'>Todos los campos son obligatorios</p>}
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
      <Image className='LogoNavFoto ' src="./Logo.png" rounded />
        <Navbar.Brand  className='colorTexto'><Link to={"/"}>Course Scoupe</Link></Navbar.Brand>
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