import React, { useState } from 'react';
import './CrearCursoIA.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { useContext } from "react"
import { CursoContext } from "./../../context/cursoContext"
import { LlamadaIA } from '../LlamarIA.jsx'

function MCrearCurso() {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');  // Corrección aquí
  const [additionalResources, setAdditionalResources] = useState('');
  const { setCursoG } = useContext(CursoContext)
  const [Curso, setCurso] = useState({ Style: "", lesson: "", recAdicionales: "", opciones: [], PrecioDelCurso: "", HechoConIa: true/*, PortadaCurso: "", imagenes: "", videos: ""*/ }) // Corrección aquí
  const [numberOfClasses, setNumberOfClasses] = useState(''); // Nuevo estado para el número de clases
  const [resultadoLlamadaIA, setResultadoLlamadaIA] = useState(null);

  const llamarIA = () => {
    const resultado = LlamadaIA(Curso.NombreDelCurso, numberOfClasses, Curso.ContenidosCurso);
    setResultadoLlamadaIA(resultado);
  };
  const handleChange = (e) => {
    console.log({ ...Curso, [e.target.name]: e.target.value })
    setCurso({ ...Curso, [e.target.name]: e.target.value })
  }


  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setCurso({ ...Curso, Style: style })
    console.log(Curso)
  }
  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
    setCurso({ ...Curso, recAdicionales: event.target.value })
    console.log(Curso)
  };
  const [proceso, setProceso] = useState(null);
  const siguiente = () => {
    setProceso('automatica')
    setCursoG(Curso)
  }
  const handleClassesChange = (event) => {
    setNumberOfClasses(event.target.value);
    // Hacer algo con numberOfClasses aquí si es necesario
  };
  return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Título del curso:</h2>
              <input type="text" id="campo1" name="NombreDelCurso" className="input-field large-input" placeholder="Ingrese el titulo del curso:" onChange={handleChange} />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo2">Descrpicion del curso:</h2>
              <input type="text" id="campo2" name="ResumenCurso" className="input-field large-input" placeholder="Ingrese la descripción del curso:" onChange={handleChange} />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Contenidos del curso:</h2>
              {/*aniadir al sql*/}
              <input type="text" id="campo3" name="ContenidosCurso" className="input-field large-input" placeholder="Ingrese los contenidos del curso:" onChange={handleChange} />
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo4">Estilos:</h2>
              <div className="button-group">
                <div className={`menu-option ${selectedStyle === 'Creativo' ? 'selected' : ''}`} onClick={() => handleStyleSelect('Creativo')}>Creativo</div>
                <div className={`menu-option ${selectedStyle === 'Elegante' ? 'selected' : ''}`} onClick={() => handleStyleSelect('Elegante')}>Elegante</div>
                <div className={`menu-option ${selectedStyle === 'Original' ? 'selected' : ''}`} onClick={() => handleStyleSelect('Original')}>Original</div>
                <div className={`menu-option ${selectedStyle === 'Más' ? 'selected' : ''}`} onClick={() => handleStyleSelect('Más')}>Más</div>
              </div>
            </div>
          </form>
          <form>
            <div className="form-group">
              <h2 htmlFor="numberOfClasses">Número de clases:</h2>
              <input
                type="text"
                placeholder="Ingrese el numero de clases que quieres que la IA haga:"
                value={numberOfClasses}
                onChange={handleClassesChange}
                className="input-field"
              />
            </div>
          </form>
          <form>
            <div className="form-group">
              <h2 htmlFor="additionalResources">Recursos adicionales</h2>
              <textarea id="additionalResources" placeholder="Ingrese los recursos:" className="input-field" value={additionalResources} onChange={handleResourcesChange}></textarea>
            </div>
          </form>
          <button className="crear-curso-option"
            onClick={llamarIA}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
            </svg>
            Llamar IA
          </button>    
        <Link to={{ pathname: '/CrearCursoIA2',state: { resultadoLlamadaIA: resultadoLlamadaIA } }}
        className={`crear-curso-option`}
        onClick={siguiente}>
          Siguiente
        </Link>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso;
