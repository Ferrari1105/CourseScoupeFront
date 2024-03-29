import React, { useState, useEffect } from 'react';
import './MCrearCurso.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { useContext } from "react";
import { CursoContext } from "./../../context/cursoContext";
import { UsuarioContext } from "./../../context/usuarioContext";
import { useLocation } from 'react-router-dom';
function MCrearCurso() {
  const { usuarioG } = useContext(UsuarioContext);
  const [ selectedStyle, setSelectedStyle] = useState('');
  const [ additionalResources, setAdditionalResources] = useState('');
  const { cursoG, setCursoG } = useContext(CursoContext);
  const initialCursoState = {
    idCurso: null,
    NombreDelCurso: "",
    ResumenCurso: "",
    ContenidosCurso: "",
    NumeroEstudiantes:  Math.floor(Math.random() * 1000000),
    idEstilo: null,
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
    videos: "",
    Terminado: false
  };
  const location = useLocation();
  const { from } = location.state || {};
  const [Curso, setCurso] = useState(from || initialCursoState);
  const [EstaTodoCargado, setEstaTodoCargado] = useState(false);
  const [listaEstilos, setListaEstilos] = useState([]);
  const [cursoGuardado, setCursoGuardado] = useState(null);
  const [ListasCargadas, setListasCargadas] = useState(true);


  // Recuperar datos de localStorage al cargar la página
  useEffect(() => {
    const storedCurso = JSON.parse(localStorage.getItem('Cursof1'));
    if (storedCurso && !from) {
      setCurso(storedCurso);
    }
    else{
      setCursoG(from)
    }
  }, []);

  // Estado inicial del curso
  

  const cargarListas = async () => {
    if (ListasCargadas) {
      const responseC = await fetch('http://localhost:3000/Estilos', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUserC = await responseC.json();
      setListaEstilos(dbUserC);
      setListasCargadas(false); 
    }
  };

  useEffect(() => {
    cargarListas();
  }, [usuarioG]);

  const handleChange = (e) => {
    setCurso({ ...Curso, [e.target.name]: e.target.value });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
    console.log("from", from)
    console.log("curso", Curso)
    console.log("cursoG", cursoG)
  }

  const handleStyleSelect = (e) => {
    const estiloBuscado = e.target.value;
    const estiloEncontrado = listaEstilos.find((estilo) => estilo.NombreEstilo === estiloBuscado);
    if (estiloEncontrado) {
      setSelectedStyle(e.target.value);
    } else {
      console.log("Malio Sal");
    }
    setCurso({ ...Curso, idEstilo: estiloEncontrado.idEstilo });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
  }

  const handleResourcesChange = (event) => {
    setAdditionalResources(event.target.value);
    setCurso({ ...Curso, recAdicionales: event.target.value });
    localStorage.setItem('Cursof1', JSON.stringify(Curso));
  };

  const siguiente = () => {
    Guardar()
    setEstaTodoCargado(true);
  }
  const Guardar = async() => {
    if(Curso.idCurso)
    {
  
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
    }
    else
    {    

    let cursoStringified = JSON.stringify(Curso);
    try {
      const response = await fetch('http://localhost:3000/CrearCurso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: cursoStringified,
      });
      const dbo = await response.json();
  
      setCurso({ ...Curso, idCurso: dbo.idCurso })
      setCursoG({ ...Curso, idCurso: dbo.idCurso }) 

    } catch {
      throw new Error(`No se pudo realizar el fetch tipo POST :(`);
    }
    } 
    }
    return (
    <div>
      <NavBar />
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo1">Título del curso:</h2>
              <h5>Ingrese un titulo para identificar su curso</h5>
              <input value={Curso.NombreDelCurso} type="text" id="campo1" name="NombreDelCurso" className="input-field large-input" placeholder="Ingrese el titulo del curso:" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <h2 htmlFor="campo2">Descrpicion del curso:</h2>
              <h5>Ingrese una breve descripcion de lo que va a mostrar en su curso</h5>
              <input value={Curso.ResumenCurso} type="text" id="campo2" name="ResumenCurso" className="input-field large-input" placeholder="Ingrese la descripción del curso:" onChange={handleChange} />
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Contenidos del curso:</h2>
              <h5>Ingrese un breve punteo de los temas a tratar en el curso</h5>
              {/*aniadir al sql*/}
              <input value={Curso.ContenidosCurso} type="text" id="campo3" name="ContenidosCurso" className="input-field large-input" placeholder="Ingrese los contenidos del curso:" onChange={handleChange}/>
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
                    <option key={Estilo.IdEstilo} value={Estilo.NombreEstilo}  data-key={Estilo.IdEstilo} >{Estilo.NombreEstilo}</option>
                  ))
                 }
                 {/*hacer funcionar como boton que agregue un Estilo*/}
                <option value="Otra">Escribir Estilo Nuevo</option>
              </select>
            
            </div>
          </form>
          <form>
            <div className="form-group">
              <h2 htmlFor="additionalResources">Recursos adicionales</h2>
              <textarea id="additionalResources" placeholder="Ingrese los recursos:" className="input-field" value={Curso.recAdicionales} onChange={handleResourcesChange}></textarea>
            </div>
          </form>
          {EstaTodoCargado ? (
            <Link to="/MCrearCurso2" className={`crear-curso-option`} onClick={() => siguiente()}>Siguiente</Link>
            ) : (
              <Link to="/MCrearCurso2" className={`crear-curso-option`} onClick={() => siguiente()}>Siguiente</Link>
              )}
          <button className='botonGuardarCambios' onClick={()=>Guardar()}>Guardar Cambios</button> 

        </div>
        
      </div>
    </div>
  );
}

export default MCrearCurso;
