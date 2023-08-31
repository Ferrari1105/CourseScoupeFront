import React, { useState } from 'react';
import './CrearCursoIA2.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../componentes/navBar.jsx';

function CrearCursoIA2() {
  const { selectedLesson } = useParams();
  const [additionalResources, setAdditionalResources] = useState('');
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
  };

  const handleOptionChange = (option) => {
    if (checkedOptions.includes(option)) {
      setCheckedOptions(checkedOptions.filter((item) => item !== option));
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  };

  const renderChecklistOptions = (options) => {
    return options.map((option, index) => (
      <div key={index} className="checklist-option">
        <label>
          <input
            type="checkbox"
            checked={checkedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      </div>
    ));
  };

  const categoryOptions = ['Fotografía y Video', 'Marketing', 'Cocina', 'Programación', 'Otra'];
  const areaOptions = ['Fotografía con celular', 'Desarrollo personal', 'Compra y venta', 'Otra'];
  const languageOptions = ['Inglés', 'Español', 'Otra'];

  return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2>Lección 1: Presentación</h2>
              <h3>Esto es un ejemplo de lección</h3>
            </div>
            <div className="form-group">
              <h2>Lección 2: Preparación</h2>
              <h3>Esto es un ejemplo de lección</h3>
            </div>
            <div className="form-group">
              <h2>Lección 3: Creación de contenidos</h2>
              <h3>Esto es un ejemplo de lección</h3>
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2>Categorías:</h2>
              <div className="checklist-group">{renderChecklistOptions(categoryOptions)}</div>
              <h2>Áreas:</h2>
              <div className="checklist-group">{renderChecklistOptions(areaOptions)}</div>
              <h2>Idiomas:</h2>
              <div className="checklist-group">{renderChecklistOptions(languageOptions)}</div>
            </div>
            <div className="form-group">
              <h2>Precio</h2>
              <input
                type="text"
                className="input-field large-input"
                placeholder="Ingrese el precio"
              />
            </div>
          </form>
          <Link to="/CrearCursoIA3" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CrearCursoIA2;
