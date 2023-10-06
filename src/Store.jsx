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
import Card from 'react-bootstrap/Card';
import Accordions from './componentes/Accordions';

function Store() {
  const {cursoG,setCursoG} = useContext(CursoContext)
  const [Curso, setCurso] = useState()
  const [cursoLecciones, setcursoLecciones] = useState()
  const {usuarioG} = useContext(UsuarioContext)
  const [showModal, setShowModal] = useState(false); // Estado para controlar si se muestra el modal
  const location = useLocation()
  const { from } = location.state || {};
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
      const response2 = await fetch(`http://localhost:3000/CursoProcesado/${CursoJson.idCurso}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
      });
      const dbCurso = await response2.json();
      console.log(dbCurso)
      setCurso(dbCurso)
      setCursoG(dbCurso)
    
  }
  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  
  useEffect(()=>async()=>await llamada(), [])

  const añadirCarrito = async()=>
  {
    let index = 0
    let ids = {
      idCurso: Curso?.idCurso,
      idUsuario: usuarioG.IdUsuario
    }
    let idsStringified = JSON.stringify(ids);
    console.log("prueba", index++)
      let response= await fetch(`http://localhost:3000/cargarCarrito`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: idsStringified
    });
   // const Carrito = await response.json();
  }
  
  return (
    <>
     {usuarioG? (
       <NavBarIniciada/>
            ) : (
              <NavBar/>
            )}
             <div className='row'>
  
               <div className='col-1'></div>
               <div className='col-7 tituloStore'>
                 <div>
                   <h1 style={{ color: "black" }}> {Curso?.NombreDelCurso}</h1>
                   <h3 style={{ color: "black" }}>{Curso?.ResumenCurso}</h3>
                   <h6 style={{ color: "gray" }}> 1,021,292 students</h6>
                   <div style={{ color: "gray" }}>
                     <h6 >Created by: <Link style={{ color: "blue" }}>{Curso?.Creador}</Link></h6>
                   </div>
                   <div style={{ color: "gray" }}>
                     <text style={{fontSize: "15px", color: "gray"}} >Idioma: Ingles {Curso?.Idioma}  </text>
                   </div>
                 </div>
             
                 <div className='row boxPreview'>
                    <h1 style={{color: "black"}} > What you'll learn </h1>
                    <div className='col-6'>
                      <ul style={{fontSize: "15px", color: "gray"}}>
                         <li>You will master the Python programming language by building 100 unique projects over 100 days.</li>
                         <br />
                         <li></li>
                         <li></li>
                         <br /> 
                         <li></li>
                         <br />
                         <li></li>
                      </ul>
                    </div>
                    <div className='col-6'>
                      <ul style={{fontSize: "15px", color: "gray"}}>
                       <li></li>
                       <br />
                       <li></li>
                       <br />
                       <li></li>
                       <br />
                       <li></li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div>
                    <h1 style={{color: "black"}}>Paso a Paso Del Curso:</h1>
                    {
                    Curso?.Lecciones.map((item, index) => (
                       <Accordions title={item.NombreLeccion}  num={index + 1}/>
                    ))}
                  </div>
                  <br />
                  <br />
                  <div>
                    <h1 style={{color: "black"}}>Adelanto:</h1>
                    <text  style={{fontSize: "20px", color: "gray"}}>{Curso?.Adelanto}</text>
                  </div>
               </div>
               
              <div className='col-4'style={{ paddingLeft: "5rem" }}>
              <Card className="cardStore">
               <Card.Img className='fotoStore' variant="top" src={Curso?.PortadaCurso} />
                <Card.Body className='cardBodyStore'>
                <Card.Title>
                  <div className='precioCard'>
                <h1>${Math.round(Curso?.PrecioDelCurso * 0.2, -1)}</h1>
                <h5 className='originalPrice'> Original Price ${Curso?.PrecioDelCurso}</h5>
                <h5>Discount 80% off</h5>
                  </div>
                </Card.Title>
                <div className='botonesStore'>
                <Link className='Link linkCard botonStore' style={{ backgroundColor: "crimson" }} onClick={añadirCarrito} >Add to cart</Link>
                <Link className='Link linkCard botonStore' to={"/CarritoDeCompras"} onClick={añadirCarrito}>Comprar Ya!</Link>
                </div>
                <Card.Text>
                 <ul>
                 <h4>Categoria:</h4>
                 <li>{Curso?.Categorias}</li>
                 <h4>Area:</h4>
                 <li>{Curso?.Areas}</li>
                 <h4>Estilo:</h4>
                 <li>{Curso?.Estilo}</li>
                 </ul>
                </Card.Text>
                <div className='extras'>
                <Link>Gift This Course</Link>
                <Link>Apply Coupon</Link>
                </div>
                </Card.Body>
               </Card>
              </div>
              </div>
    </>
  )
}

export default Store


/*
<div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 className="name"></h1>
            <h6>Un Curso de:</h6>
            <img className="img" src={Curso?.PortadaCurso} alt="" />
            <br />
            <h3>Resumen del curso: </h3>
            <h3 className="descripcion"></h3>
            <h3>Adelanto:{Curso?.Adelanto}</h3>
[22:05]
</Col >
        <Col sm={4} className='right-side '>
            <div><h1></h1></div>
            <div>
              <p>Descuento: 
              <input type="text" placeholder='Sin Codigo' />
              </p>
              </div>

            {usuarioG? (
             //<Link to="/Comprar1" >Comprar</Link> 
             <Link className='Link' onClick={handleShow} >Comprar</Link>

            ) : (
              <Link className='Link' onClick={handleShow} >Comprar</Link>
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
             <Link className='Link'>Regalo</Link>
              <div className='categorias-areas'>
                <p>aaaaa|bbbbbbb|ccccc|ddddd</p>
                <p>Areas: 1 | 2 | 3 | 4</p>
              </div>
[22:05]
</Col>
      </Row>
    </div>
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Debes iniciar sesión para comprar un curso.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

*/
 