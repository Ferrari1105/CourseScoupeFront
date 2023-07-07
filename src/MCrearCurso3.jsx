import React from 'react';
import './MCrearCurso3.css';
import NavBar from './componentes/navBar';
import { Link, useParams } from 'react-router-dom';

function MCrearCurso3() {
  return (
    <div>
        <NavBar></NavBar>
        <div className="three-rows-view">
      <div className="row">
        <h2 className="row-title">Banner:</h2>
        <div className="photo-container">
          <img src="/foto1.jpg" alt="Foto 1" className="photo" />
        </div>
      </div>
      <div className="row">
        <h2 className="row-title">Imagenes:</h2>
        <div className="photo-container">
          <img src="foto2.jpg" alt="Foto 2" className="photo" />
        </div>
        <div className="photo-container">
          <img src="foto3.jpg" alt="Foto 3" className="photo" />
        </div>
      </div>
      <div className="row">
        <h2 className="row-title">Videos:</h2>
        <div className="photo-container">
          <img src="video.jpeg" alt="Foto 6" className="photo" />
        </div>
      </div>
      <Link to="/CursoTerminado" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
        Siguiente
          </Link>
    </div>
    </div>

  );
}

export default MCrearCurso3;
