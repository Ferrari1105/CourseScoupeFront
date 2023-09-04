import React, { useState } from 'react';
import './MCrearCurso.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar.jsx';
import { useContext } from "react"
import { CursoContext } from "./../../context/cursoContext"

function MCrearCurso() {
  const [selectedLesson, setSelectedLesson] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');  // Corrección aquí
  const [additionalResources, setAdditionalResources] = useState('');
  const {setCursoG} = useContext(CursoContext)
  const [Curso, setCurso] = useState({ Style:"", lesson: "", recAdicionales: "", opciones:[], PrecioDelCurso: "",HechoConIa: false/*, PortadaCurso: "", imagenes: "", videos: ""*/}) // Corrección aquí
  const handleChange = (e) => {
    console.log({...Curso, [e.target.name]: e.target.value})
    setCurso({...Curso, [e.target.name]: e.target.value})
  }

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setCurso({...Curso, Style: style})
    console.log(Curso)
  }
  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
    setCurso({...Curso, recAdicionales: event.target.value})
    console.log(Curso)
  };
  const [proceso, setProceso] = useState(null);
const siguiente = () => {
  setProceso('automatica')
  setCursoG(Curso)
}
  return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Título del curso:</h2>
              <h5>adasdas</h5>
              <input type="text" id="campo1" name="NombreDelCurso" className="input-field large-input" placeholder="Ingrese el titulo del curso:" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <h2 htmlFor="campo2">Descrpicion del curso:</h2>
              <input type="text" id="campo2" name="ResumenCurso" className="input-field large-input" placeholder="Ingrese la descripción del curso:" onChange={handleChange} />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Contenidos del curso:</h2>
              {/*aniadir al sql*/}
              <input type="text" id="campo3" name="ContenidosCurso" className="input-field large-input" placeholder="Ingrese los contenidos del curso:" onChange={handleChange}/>
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
              <h2 htmlFor="additionalResources">Recursos adicionales</h2>
              <textarea id="additionalResources" placeholder="Ingrese los recursos:" className="input-field" value={additionalResources} onChange={handleResourcesChange}></textarea>
            </div>
          </form>
          <Link to="/MCrearCurso2" className={`crear-curso-option`} onClick={() => siguiente()}>Siguiente</Link>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso;
