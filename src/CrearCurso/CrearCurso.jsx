import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarIniciada from '../componentes/navBar-iniciada.jsx';
import NavBar from '../componentes/navBar.jsx';
import Banner from '../componentes/banner';
import CardCurso from '../componentes/cardCurso';
import './CrearCurso.css';
import MisPresentaciones from './MisPresentaciones';
import { useContext } from "react"
import { UsuarioContext } from '../../context/usuarioContext';
function CrearCurso() {
  const {usuarioG} = useContext(UsuarioContext)
  const [proceso, setProceso] = useState(null);
  console.log(localStorage.getItem('Cursof1'))
  return (
    <div>
      {usuarioG? (
              <NavBarIniciada/>
            ) : (
              <NavBar/>
            )}
      <div className="crear-curso-container">
        <h2 className="crear-curso-title">
          Antes de comenzar a crear el curso, ¿cómo quieres que sea el proceso?
        </h2>
        <div className="botones-siguiente">
        {localStorage.getItem('Cursof1') ? (
          <Link to="/MCrearCurso" className={`boton-siguiente ${proceso === 'manual' ? 'active' : ''}`}onClick={() => setProceso('manual')}>Opcion Manual</Link>
          ) : (
              <Link to="/MCrearCurso" className={`boton-siguiente ${proceso === 'manual' ? 'active' : ''}`}style={{ backgroundColor: "peru" }}>Editar Curso En Proceso</Link>
            )}
        <Link to="/CrearCursoIA" className={`boton-siguiente ${ proceso === 'automatica' ? 'active' : '' }`} onClick={() => setProceso('automatica')}>Opción Automática</Link>
        </div>
        <div className="crear-curso-info">
          <p className="crear-curso-info-text">Como saber qué opción elegir: Al elegir el modo manual, usted tendrá que ingresar los contenidos del curso y tendrá acceso a una inteligencia artificial como asistente que le dará recomendaciones sobre el contenido. Por otro lado, al elegir Inteligencia Artificial, usted le tendrá que decir a la inteligencia artificial qué debe incluir en el curso.</p>
        </div>
      </div>
    </div>
  );
}

export default CrearCurso;
