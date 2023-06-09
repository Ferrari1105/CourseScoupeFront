import { useState } from 'react'
import NavBar from './componentes/navBar'
import './Store.css'
import { Row } from 'react-bootstrap'

function Store() {

  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
    <Row>

    <div>
        <h1>Curso Basico C#</h1>
        <h6>Un Curso de: Lucas Vazquez</h6>
        <img src="https://img-c.udemycdn.com/course/750x422/3502872_90c0.jpg" alt="" />
        <br />
        <h3>Resumen del curso:</h3>
        <h3>Aprende a pogrmar en python con una guia sencilla hecha para que hasta el mas principiante pueda entender</h3>
        <h3>Adelanto:No tengo adelanto, comprenlo</h3>

    </div>
    </Row>
    <div>
        <h1>200</h1>
    </div>
    </>
  )
}

export default Store
