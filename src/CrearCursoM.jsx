import NavBar from './componentes/navBar-iniciada';
import Banner from './componentes/banner';
import './CrearCursoM.css';
import { Link } from 'react-router-dom';

function CrearCursoM() {
  return (
    <div>

      <div className="crear-curso-container">
        <div className="crear-curso-form">
          <h2>Crear Curso</h2>
          <div className="crear-curso-input">
            <label htmlFor="nombreCurso">Titulo del Curso:</label>
            <textarea id="nombreCurso"></textarea>
          </div>
          <div className="crear-curso-input">
            <label htmlFor="descripcionCurso">Descripción del Curso:</label>
            <textarea id="descripcionCurso"></textarea>
          </div>
          <div className="crear-curso-input">
            <label htmlFor="contenidoCurso">Contenido del Curso:</label>
            <textarea id="contenidoCurso"></textarea>
          </div>
          <div className="crear-curso-buttons">
            <button className="guardar-curso-button">Guardar Curso</button>
          </div>
        </div>
        <div className="crear-curso-sidebar">
          <h2>Estilos</h2>
          <div className="crear-curso-estilos-buttons">
            <Link to="/CrearCurso" className="crear-curso-option">Crear Curso</Link>
            <Link to="/CrearPresentacion" className="crear-curso-option">Crear Presentación</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearCursoM;
