import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './componentes/navBar';
import Banner from './componentes/banner';
import CardCurso from './componentes/cardCurso';
import './CrearCurso.css';
import MisPresentaciones from './MisPresentaciones';

function CrearCurso() {
  const [proceso, setProceso] = useState(null);

  return (
    <div>
      <NavBar></NavBar>
      <div className="crear-curso-container">
        <h2 className="crear-curso-title">
          Antes de comenzar a crear el curso, ¿cómo quieres que sea el proceso?
        </h2>
        <div className="crear-curso-options">
        <Link to="/MCrearCurso" className={`crear-curso-option ${proceso === 'manual' ? 'active' : ''}`}onClick={() => setProceso('manual')}>Opción Manual</Link>
        <Link to="/CrearCursoIA" className={`crear-curso-option ${ proceso === 'automatica' ? 'active' : '' }`} onClick={() => setProceso('automatica')}>Opción Automática</Link>
        </div>
        <div className="crear-curso-info">
          <p className="crear-curso-info-text">Como saber qué opción elegir: Al elegir el modo manual, usted tendrá que ingresar los contenidos del curso y tendrá acceso a una inteligencia artificial como asistente que le dará recomendaciones sobre el contenido. Por otro lado, al elegir Inteligencia Artificial, usted le tendrá que decir a la inteligencia artificial qué debe incluir en el curso.</p>
        </div>
      </div>
    </div>
  );
}

export default CrearCurso;
