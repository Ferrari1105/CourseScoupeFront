import React, { useState } from 'react';
import './MCrearCurso2.css';
import { Link, useParams } from 'react-router-dom';

function MCrearCurso2() {
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

  const renderChecklistOptions = () => {
    const options = ['Fotografía y Video', 'Marketing', 'Cocina', 'Programación', 'Otra'];

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

  const renderChecklistOptions2 = () => {
    const options = ['Fotografía con celular', 'Desarrollo personal', 'Compra y venta', 'Otra'];

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

  const renderChecklistOptions3 = () => {
    const options3 = ['Inglés', 'Español', 'Otra'];

    return options3.map((option3, index) => (
      <div key={index} className="checklist-option">
        <label>
          <input
            type="checkbox"
            checked={checkedOptions.includes(option3)}
            onChange={() => handleOptionChange(option3)}
          />
          {option3}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Lección 1: Presentación</h2>
              <input type="text" id="campo1" className="input-field large-input" />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo2">Lección 2: Preparación</h2>
              <input type="text" id="campo2" className="input-field large-input" />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Lección 3: Creación de contenidos</h2>
              <input type="text" id="campo3" className="input-field large-input" />
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo4">Categorías:</h2>
              <div className="checklist-group">{renderChecklistOptions()}</div>
              <h2 htmlFor="campo5">Áreas:</h2>
              <div className="checklist-group">{renderChecklistOptions2()}</div>
              <h2 htmlFor="campo6">Idiomas:</h2>
              <div className="checklist-group">{renderChecklistOptions3()}</div>
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Precio</h2>
              <input type="text" id="campo3" className="input-field large-input" placeholder='Ingrese el precio'/>
            </div>
          </form>
          <Link to="/MCrearCurso3" className={`crear-curso-option`} onClick={() => setProceso('automatica')}>
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso2;
