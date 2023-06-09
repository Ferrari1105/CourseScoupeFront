import { useState } from 'react'
import NavBar from './componentes/navBar'
import { Row, Col } from 'react-bootstrap'
import './Store.css'
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom' 
function Store({ idCurso }) {
  // fetch para acceder al curso a partir del id
  // mostar la info del curso
  return (
    <>
    <NavBar></NavBar>
    <div className='store-container'>
      <Row>
        <Col sm={8} className='left-side'>
            <h1>Curso Basico C#</h1>
            <h6>Un Curso de: Lucas Vazquez</h6>
            <img src="https://img-c.udemycdn.com/course/750x422/3502872_90c0.jpg" alt="" />
            <br />
            <h3>Resumen del curso:</h3>
            <h3>Aprende a pogrmar en python con una guia sencilla hecha para que hasta el mas principiante pueda entender</h3>
            <h3>Adelanto:No tengo adelanto, comprenlo</h3>

        </Col >
        <Col sm={4} className='right-side '>
            <div><h1>$200</h1></div>
            <div><p>Descuento: sin codigo </p></div>
            <Button><Link>Comprar</Link></Button>
            <div className='store-info-container'>
              <div className='store-info-item' >
                <div className='store-info-icon'></div>
                <p>Lorem ipsum dolor sit amet consecta.</p>
              </div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
              <div className='store-info-item' ><div className='store-info-icon'></div><p>Lorem ipsum dolor sit amet consecta.</p></div>
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
    </>
  )
}

export default Store
