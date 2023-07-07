import React, { useState } from 'react';
import './MCrearCurso.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar.jsx';
import { Navbar } from 'react-bootstrap';

function MCrearCurso() {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [additionalResources, setAdditionalResources] = useState('');

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
  };
  const [proceso, setProceso] = useState(null);

  return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Título del curso:</h2>
              <input type="text" id="campo1" className="input-field large-input" placeholder="Ingrese el titulo del curso:" />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo2">Descrpicion del curso:</h2>
              <input type="text" id="campo2" className="input-field large-input" placeholder="Ingrese la descripción del curso:" />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Contenidos del curso:</h2>
              <input type="text" id="campo3" className="input-field large-input" placeholder="Ingrese los contenidos del curso:" />
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo4">Estilos:</h2>
              <div className="button-group">
                <button className="white-button">Creativo</button>
                <button className="white-button">Elegante</button>
                <button className="white-button">Original</button>
                <button className="white-button">Más</button>
              </div>
            </div>
          </form>
          <h2>Número de lecciones:</h2>
          <div className="lesson-menu">
            <div className={`menu-option ${selectedLesson === '1' ? 'selected' : ''}`} onClick={() => handleLessonSelect('1')}>1</div>
            <div className={`menu-option ${selectedLesson === '2' ? 'selected' : ''}`} onClick={() => handleLessonSelect('2')}>2</div>
            <div className={`menu-option ${selectedLesson === '3' ? 'selected' : ''}`} onClick={() => handleLessonSelect('3')}>3</div>
            <div className={`menu-option ${selectedLesson === '4' ? 'selected' : ''}`} onClick={() => handleLessonSelect('4')}>4</div>
            <div className={`menu-option ${selectedLesson === '5' ? 'selected' : ''}`} onClick={() => handleLessonSelect('5')}>5</div>
          </div>
          <form>
            <div className="form-group">
              <h2 htmlFor="additionalResources">Recursos adicionales</h2>
              <textarea id="additionalResources" placeholder="Ingrese los recursos:" className="input-field" value={additionalResources} onChange={handleResourcesChange}></textarea>
            </div>
          </form>
          <Link to="/MCrearCurso2" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>Siguiente</Link>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso;
