import React, { useState, useEffect } from 'react';
import './MCrearCurso.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { useContext } from "react";
import { CursoContext } from "./../../context/cursoContext";
import { UsuarioContext } from "./../../context/usuarioContext";
import { LlamadaIA,DescripcionIA } from '../LlamarIA.jsx'

function MCrearCurso() {
  const { usuarioG } = useContext(UsuarioContext);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [additionalResources, setAdditionalResources] = useState('');
  const { setCursoG, iarResult, setIAResult,setIaResumen } = useContext(CursoContext); // Cambiado de resultadoLlamadaIA a iarResult
  const [numberOfClasses, setNumberOfClasses] = useState('');

  useEffect(() => {
    const storedCurso = JSON.parse(localStorage.getItem('Cursof1'));
    if (storedCurso) {
      setCurso(storedCurso);
    }
  }, []);

  const initialCursoState = {
    idCurso: null,
    NombreDelCurso: "",
    ResumenCurso: "",
    ContenidosCurso: "",
    NumeroEstudiantes: Math.floor(Math.random() * 1000000),
    Style: null,
    lesson: "",
    recAdicionales: "",
    idCategorias: null,
    idAreas: null,
    idIdioma: null,
    Lessons: [],
    PrecioDelCurso: null,
    HechoConIa: false,
    idCreador: usuarioG.IdUsuario,
    PortadaCurso: "",
    imagenes: "",
    videos: ""
  };

  const [Curso, setCurso] = useState(initialCursoState);
  const [EstaTodoCargado, setEstaTodoCargado] = useState(false);
  const [listaEstilos, setListaEstilos] = useState([]);
  const [ListasCargadas, setListasCargadas] = useState(true);

  const cargarListas = async () => {
    if (ListasCargadas) {
      const responseC = await fetch('http://localhost:3000/Estilos', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUserC = await responseC.json();
      setListaEstilos(dbUserC);
      setListasCargadas(false)
    }
  };

  useEffect(() => {
    cargarListas();
  }, [usuarioG]);

  const handleChange = (e) => {
    setCurso({ ...Curso, [e.target.name]: e.target.value });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
  }

  const handleStyleSelect = (e) => {
    const estiloBuscado = e.target.value;
    const estiloEncontrado = listaEstilos.find((estilo) => estilo.NombreEstilo === estiloBuscado);
    if (estiloEncontrado) {
      setSelectedStyle(e.target.value);
    } else {
      console.log("Malio Sal");
    }
    setCurso({ ...Curso, Style: estiloEncontrado.idEstilo });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
  }

  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
    setCurso({ ...Curso, recAdicionales: event.target.value });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
  };

  const siguiente = () => {
    // Guardar los datos en localStorage
    Guardar();
    setEstaTodoCargado(true);
  }

  const Guardar = async () => {
    if (Curso.idCurso) {
      console.log("updateCurso", Curso)
      let cursoStringified = JSON.stringify(Curso);
      try {
        const responseeee = await fetch(`http://localhost:3000/CrearCurso`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: cursoStringified,
        });
      } catch {
        throw new Error(`No se pudo realizar el fetch tipo POST :(`);
      }
    } else {
      console.log("crearCurso", Curso)
      let cursoStringified = JSON.stringify(Curso);
      try {
        const response = await fetch('http://localhost:3000/CrearCurso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: cursoStringified,
        });
        const dbo = await response.json();
        console.log(dbo.idCurso)
        setCurso({ ...Curso, idCurso: dbo.idCurso })
        setCursoG({ ...Curso, idCurso: dbo.idCurso })
        console.log("seteando id: ", Curso)
      } catch {
        throw new Error(`No se pudo realizar el fetch tipo POST :(`);
      }
    }
  }

  const handleClassesChange = (event) => {
    setNumberOfClasses(event.target.value);
    // Hacer algo con numberOfClasses aquí si es necesario
  };

  const handleLlamarIA = async () => {
    try {
      const resultado = await LlamadaIA(Curso.NombreDelCurso, numberOfClasses, Curso.ContenidosCurso);
      const resumen = await  DescripcionIA(Curso.NombreDelCurso,Curso.ContenidosCurso)
      console.log(resultado)
      setIAResult(resultado);
      setIaResumen(resumen)
      console.log(resumen)
    } catch (error) {
      console.error("Error al llamar a la IA:", error);
    }
  };
  
  

  return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Título del curso:</h2>
              <h5>Ingrese un titulo para identificar su curso</h5>
              <input value={Curso.NombreDelCurso} type="text" id="campo1" name="NombreDelCurso" className="input-field large-input" placeholder="Ingrese el titulo del curso:" onChange={handleChange} />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Contenidos del curso:</h2>
              <h5>Ingrese un breve punteo de los temas a tratar en el curso</h5>
              <input value={Curso.ContenidosCurso} type="text" id="campo3" name="ContenidosCurso" className="input-field large-input" placeholder="Ingrese los contenidos del curso:" onChange={handleChange} />
            </div>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo4">Estilos:</h2>
              <select value={selectedStyle} onChange={handleStyleSelect}>
                <option value="">Selecciona un estilo</option>
                {
                  listaEstilos.map(Estilo => (
                    <option key={Estilo.IdEstilo} value={Estilo.NombreEstilo} data-key={Estilo.IdEstilo} >{Estilo.NombreEstilo}</option>
                  ))
                }
                <option value="Otra">Escribir Estilo Nuevo</option>
              </select>
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
          <button className="crear-curso-option" onClick={handleLlamarIA}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183a.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188a.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
            </svg>
            Llamar IA
          </button>

          {iarResult ? (
            <Link to="/CrearCursoIA2" className={`crear-curso-option`} onClick={() => siguiente()}>Siguiente</Link>
            ) : (
              <Link  className={`crear-curso-option`} >Siguiente</Link>
              )}
            <button  className='botonGuardarCambios' onClick={() => Guardar()}>Guardar Cambios</button>

        </div>
      </div>
    </div>
  );
}

export default MCrearCurso;