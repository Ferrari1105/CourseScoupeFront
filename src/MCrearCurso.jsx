import React, { useState } from 'react';
import './MCrearCurso.css';

function MCrearCurso() {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [additionalResources, setAdditionalResources] = useState('');

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
  };

  return (
    <div>
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <label htmlFor="campo1">Título del curso</label>
              <input type="text" id="campo1" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="campo2">Descripción del curso</label>
              <input type="text" id="campo2" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="campo3">Contenido del curso</label>
              <input type="text" id="campo3" className="input-field" />
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <label htmlFor="campo4">Estilos</label>
              <div className="button-group">
                <button className="white-button">Creativo</button>
                <button className="white-button">Elegante</button>
                <button className="white-button">Original</button>
                <button className="white-button">Más</button>
              </div>
            </div>
          </form>
          <h2>Número de lecciones</h2>
          <div className="lesson-menu">
            <div
              className={`menu-option ${selectedLesson === '1' ? 'selected' : ''}`}
              onClick={() => handleLessonSelect('1')}
            >
              1
            </div>
            <div
              className={`menu-option ${selectedLesson === '2' ? 'selected' : ''}`}
              onClick={() => handleLessonSelect('2')}
            >
              2
            </div>
            <div
              className={`menu-option ${selectedLesson === '3' ? 'selected' : ''}`}
              onClick={() => handleLessonSelect('3')}
            >
              3
            </div>
          </div>
          <h2>Recursos Adicionales</h2>
          <form>
            <div className="form-group">
              <label htmlFor="additionalResources">Recursos adicionales</label>
              <textarea
                id="additionalResources"
                className="input-field"
                value={additionalResources}
                onChange={handleResourcesChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso;
