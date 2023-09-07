import React, { useState } from 'react';
import './CrearCursoIA2.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../componentes/navBar.jsx';
import { useContext } from 'react';
import { CursoContext } from './../../context/cursoContext';

function MCrearCurso2()  {

  const [costo, setCosto] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(3);
  const [lessonTitles, setLessonTitles] = useState([
    { title: 'Lección 1', content: '' },
    { title: 'Lección 2', content: '' },
    { title: 'Lección 3', content: '' },
  ]); // Inicializa con 3 lecciones por defecto
  const { setCursoG } = useContext(CursoContext);
  const { cursoG } = useContext(CursoContext);
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [selectedArea, setSelectedArea] = useState(''); // Estado para el área seleccionada
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Estado para el idioma seleccionado
  const [listaCategorias, setListaCategorias] = useState([])
  const [listaAreas, setListaAreas] = useState([])
  const [listaIdiomas, setListaIdiomas] = useState([])
  const [ListasCargadas, setListasCargadas] = useState(true);
  const cargarListas= async () => {
    if (ListasCargadas) {
      const responseC = await fetch('http://localhost:3000/Categorias', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUserC = await responseC.json();
      setListaCategorias(dbUserC)
      const responseA = await fetch('http://localhost:3000/Areas', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUserA = await responseA.json();
      setListaAreas(dbUserA)
      const responseI = await fetch('http://localhost:3000/Idiomas', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUserI = await responseI.json();
      setListaIdiomas(dbUserI)

      setListasCargadas(false); // Marcar que las listas se han cargado
   }
   else{}
  };
  cargarListas()
  const cargarPrecio = (e) => {
    console.log(cursoG);
    setCosto(e.target.value);
   // setCursoG({ ...cursoG, opciones: [selectedCategory, selectedArea, selectedLanguage] });
  };
  
  const siguiente = () => {
    setCursoG({ ...cursoG, opciones: [selectedCategory, selectedArea, selectedLanguage] });
    setCursoG({ ...cursoG, PrecioDelCurso: costo });
  };

  const agregarLeccion = () => {
    setCurrentLesson(currentLesson + 1);
    setLessonTitles([
      ...lessonTitles,
      { title: `Lección ${currentLesson + 1}`, content: '' },
    ]);
  };

  const eliminarLeccion = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setLessonTitles(lessonTitles.slice(0, -1));
    }
  };

  const handleLessonTitleChange = (event, index) => {
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].title = event.target.value;
    setLessonTitles(newLessonTitles);
  };

  const handleLessonContentChange = (event, index) => {
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].content = event.target.value;
    setLessonTitles(newLessonTitles);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            {lessonTitles.map((lesson, index) => (
              <div key={index} className="form-group">
                <h2 htmlFor={`titulo${index + 1}`}>Título de {lesson.title}:</h2>
                <input
                  type="text"
                  id={`titulo${index + 1}`}
                  className="input-field large-input"
                  value={lesson.title}
                  onChange={(e) => handleLessonTitleChange(e, index)}
                />
                <h2 htmlFor={`contenido${index + 1}`}>Contenido de {lesson.title}:</h2>
                <textarea
                  id={`contenido${index + 1}`}
                  className="input-field large-input"
                  value={lesson.content}
                  onChange={(e) => handleLessonContentChange(e, index)}
                />
              </div>
            ))}
            <button type="button" onClick={agregarLeccion}>
              Agregar Lección
            </button>
            <button type="button" onClick={eliminarLeccion}>
              Eliminar Lección
            </button>
          </form>
        </div>
        <div className="formularios-view-column">
          <form>
            <div className="form-group">
              <h2 htmlFor="campo4">Categorías:</h2>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Selecciona una Categoría</option>
                  {
                  listaCategorias.map(categoria => (
                    <option key={categoria.NombreCategoria} value={categoria.NombreCategoria}>{categoria.NombreCategoria}</option>
                  ))
                 }
                 {/*hacer funcionar como boton que agregue una categoria*/}
                <option value="Otra">Escribir Categoria Nueva</option>
              </select>
              <h2 htmlFor="campo5">Áreas:</h2>
              <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
              <option value="">Selecciona un Area</option>
                  {
                  listaAreas.map(area => (
                    <option key={area.NombreArea} value={area.NombreArea}>{area.NombreArea}</option>
                  ))
                 }
                 {/*hacer funcionar como boton que agregue un Area*/}
                <option value="Otra">Escribir Area Nueva</option>
              </select>
              <h2 htmlFor="campo6">Idiomas:</h2>
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
              <option value="">Selecciona un Idioma</option>
                  {
                  listaIdiomas.map(idioma => (
                    <option key={idioma.Idioma} value={idioma.Idioma}>{idioma.Idioma}</option>
                  ))
                 }
                 {/*hacer funcionar como boton que agregue un Idioma*/}
                <option value="Otra">Escribir Otro Idioma</option>
              </select>
            </div>
            <div className="form-group">
              <h2 htmlFor="campo3">Precio</h2>
              <input
                type="text"
                name="precio"
                className="input-field large-input"
                placeholder="Ingrese el precio"
                onChange={cargarPrecio}
              />
            </div>
          </form>
          <Link to="/MCrearCurso3" className={`crear-curso-option`} onClick={siguiente}>
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MCrearCurso2;
