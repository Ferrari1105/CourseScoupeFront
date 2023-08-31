import React from 'react';
import './CursoTerminado.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../componentes/navBar.jsx';
import { Navbar } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import {Button } from 'react-bootstrap';

function CursoTerminado() {
  return (
    <div>
        <NavBar></NavBar>
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1 class="name">Titulo</h1>
            <h6>Un Curso de: </h6>
            <img class="img" src="src/Imgs/foto1.jpg" alt="" />
            <br />
            <h3>Resumen del curso:</h3>
            <h3 class="descripcion">Descripcion</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>$Precio</h1></div>
            <div><p>Descuento: sin codigo </p></div>
            <Link to="/" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
        Comprar
          </Link>
            <div className='store-info-container'>
              <div className='store-info-item' >
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Valoracion: -</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Estudiantes: -</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Audio: Español - Ingles</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Subtitulos: Español - Frances - Aleman - Ingles </p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lecciones: -</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Recursos Adicionales: -</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Online y a tu ritmo</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Nivel: Inicial</p></div>
            </div>
              <div className='descripcion-Usuario'><p>Un curso de Lucas Vazquez Programador senior, ex-empleado de microsoft </p></div> 
              <div className='categorias-areas'>
                <Link to="/" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
        Regalar
          </Link>
              </div>
        </Col>
      </Row>
    </div>
    </div>
    
  );
}

export default CursoTerminado;
