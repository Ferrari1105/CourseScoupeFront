import React from 'react';
import './MCrearCurso3.css';
import NavBar from '../componentes/navBar.jsx';
import { Link, useParams } from 'react-router-dom';
import { useContext } from "react"
import { CursoContext } from "./../../context/cursoContext"

function MCrearCurso3() {
  const {cursoG}= useContext(CursoContext)

  const terminar = async() => {
    let cursoStringified = JSON.stringify(cursoG);
    try {
      const response = await fetch('http://localhost:3000/MCrearCurso3', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: cursoStringified
      })
      return await response.json()
    }
    catch {
      throw new Error(`No se pudo realizar el fetch tipo ${method} :(`)
    }
  }
  return (
    <div>
        <NavBar/>
        <div className="three-rows-view">
      <div className="row">
        <h2 className="row-title">Banner:</h2>
        <div className="photo-container">
          <img src="src/Imgs/foto1.jpg" alt="Foto 1" className="photo" />
        </div>
      </div>
      <div className="row">
        <h2 className="row-title">Imagenes:</h2>
        <div className="photo-container">
          <img src="src/Imgs/foto2.jpg" alt="Foto 2" className="photo" />
        </div>
        <div className="photo-container">
          <img src="src/Imgs/foto3.jpg" alt="Foto 3" className="photo" />
        </div>
      </div>
      <div className="row">
        <h2 className="row-title">Videos:</h2>
        <div className="photo-container">
          <img src="src\Imgs\video.jpeg" alt="Foto 6" className="photo" />
        </div>
      </div>
      <Link to="/CursoTerminado" className={`crear-curso-option`} onClick={() => terminar()}>
        Terminar
          </Link>
    </div>
    </div>

  );
}

export default MCrearCurso3;
