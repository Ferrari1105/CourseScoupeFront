import { useEffect, useState } from 'react'
import NavBar from './componentes/navBar'
import { Row, Col } from 'react-bootstrap'
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Store.css'
import { useContext } from "react"
import { CursoContext } from "./../context/cursoContext"
import { UsuarioContext } from '../context/usuarioContext';
import NavBarIniciada from './componentes/navBar-iniciada.jsx'
import Modal from 'react-bootstrap/Modal'; // Importar el componente Modal  
import { useLocation } from 'react-router-dom'
function Store() {
  const {cursoG} = useContext(CursoContext)
  const [Curso, setCurso] = useState()
  const {usuarioG} = useContext(UsuarioContext)
  const [showModal, setShowModal] = useState(false); // Estado para controlar si se muestra el modal
  const location = useLocation()
  const { from } = location.state
  const cargarCurso = async () => {
    
  

  }
  useEffect(()=>async()=>await cargarCurso(), [])

  const llamada = async () => {
    console.log(from)
    // pasarle nombre en vez del id, y devolver el ultimo curso creado con ese nombre en el backend
    const response1= await fetch(`http://localhost:3000/Cursos/${from}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json"},
    });
    const CursoJson = await response1.json();
    console.log(CursoJson)
      const response2 = await fetch(`http://localhost:3000/CursoProcesado/${CursoJson.idCurso}`);
      const dbCurso = await response2.json();
      console.log(dbCurso)
      setCurso(dbCurso)
  
    
  }
  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  
  useEffect(()=>async()=>await llamada(), [])
  return (
    <>
     {usuarioG? (
              <NavBarIniciada/>
            ) : (
              <NavBar/>
            )}
    
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 className="name">{Curso?.NombreDelCurso}</h1>
            <h6>Un Curso de: Lucas Vazquez</h6>
            <img className="img" src={Curso?.PortadaCurso} alt="" />
            <br />
            <h3>Resumen del curso: {Curso?.ResumenCurso}</h3>
            <h3 className="descripcion"></h3>
            <h3>Adelanto:{Curso?.Adelanto}</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>{cursoG?.PrecioDelCurso}</h1></div>
            <div><p>Descuento: sin codigo </p></div>

            {usuarioG ? (
              <Button><Link to={{ pathname: "/Comprar1", state: { image: Curso?.PortadaCurso } }}>Comprar</Link></Button>
            ) : (
              <Button><Link onClick={handleShow} >Comprar</Link></Button>
            )}
           
            <div className='store-info-container'>
              <div className='store-info-item' >
                <h3>Clasficaciones:</h3>
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Categorias}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Areas}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Estilo}</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>{Curso?.Idioma}</p></div>
            </div>
              <div className='descripcion-Usuario'><div className='store-info-icon'></div><p>Un curso de Lucas Vazquez Programador senior, ex-empleado de microsoft  </p></div> 
              <Button><Link>Regalo</Link></Button>
              <div className='categorias-areas'>
                <p>aaaaa|bbbbbbb|ccccc|ddddd</p>
                <p>Areas: 1 | 2 | 3 | 4</p>
              </div>
        </Col>
      </Row>
    </div>
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
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Store
