import React, { useState } from 'react';
import './MCrearCurso2.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { useContext } from 'react';
import { CursoContext } from './../../context/cursoContext';
import { useEffect } from 'react';
function MCrearCurso2() {

  const [costo, setCosto] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(3);
  const [lessonTitles, setLessonTitles] = useState([]); // Inicializa sin lecciones por defecto
  const { cursoG, setCursoG, iarResult, iaResumen } = useContext(CursoContext);
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const [selectedArea, setSelectedArea] = useState(''); // Estado para el área seleccionada
  const [selectedLanguage, setSelectedIdioma] = useState(''); // Estado para el idioma seleccionado
  const [listaCategorias, setListaCategorias] = useState([])
  const [listaAreas, setListaAreas] = useState([])
  const [listaIdiomas, setListaIdiomas] = useState([])
  const [ListasCargadas, setListasCargadas] = useState(true);
  const [Lecciones, setLecciones] = useState([])
  const [descripcionCurso, setDescripcionCurso] = useState(''); // Nueva adición
  const subpartes = iarResult.data.outputs[0].text.split(/Lección \d+: /).filter(Boolean);
  const leccionesFormateadas = subpartes.map((content, index) => ({
    title: `Lección ${index + 1}`,
    content,
  }));
  const [subpartesSinPrimero, setSubpartesSinPrimero] = useState(
    leccionesFormateadas.slice(1)
  );
  const [lessonContents, setLessonContents] = useState([]);

  const resumenCurso = iaResumen.data.outputs[0].text.split('Blog Body:')
  const cargarListas = async () => {
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
    else { }
  };
  cargarListas()
  const cargarPrecio = (e) => {
    setCosto(e.target.value);
    guardarEnLocalStorage(); // Guardar en localStorage cuando cambia el precio
  };
  const handleIdioma = (e) => {

    const idiomaBuscado = e.target.value;
    const idiomaEncontrado = listaIdiomas.find((idioma) => idioma.Idioma === idiomaBuscado);
    if (idiomaEncontrado) {
      setSelectedIdioma(e.target.value)
    } else {
      console.log("Malio Sal")
    }
    setCursoG({ ...cursoG, idIdioma: idiomaEncontrado.idIdioma })

  }
  const handleArea = (e) => {

    const AreaBuscada = e.target.value;
    const AreaEncontrada = listaAreas.find((Area) => Area.NombreArea === AreaBuscada);
    if (AreaEncontrada) {
      setSelectedArea(e.target.value)

    } else {
      console.log("Malio Sal")
    }
    setCursoG({ ...cursoG, idAreas: AreaEncontrada.idAreas })


  }
  const handleCategorias = (e) => {

    const CategoryBuscado = e.target.value;
    const CategoryEncontrado = listaCategorias.find((Category) => Category.NombreCategoria === CategoryBuscado);
    if (CategoryEncontrado) {
      setSelectedCategory(e.target.value)
    } else {
      console.log("Malio Sal")
    }
    setCursoG({ ...cursoG, idCategorias: CategoryEncontrado.idCategoria })


  }
  const siguiente = async () => {
    // setCursoG({ ...cursoG, opciones: [selectedCategory, selectedArea, selectedLanguage] });
    await Guardar()
    await setCursoG({ ...cursoG, PrecioDelCurso: costo });

  };

  const agregarLeccion = () => {
    const newLesson = { title: `Lección ${subpartesSinPrimero.length + 1}`, content: '' };
    setLessonTitles([...lessonTitles, newLesson]);
    setSubpartesSinPrimero((prevSubpartes) => [
      ...prevSubpartes,
      newLesson.content,
    ]);

    guardarEnLocalStorage();
  };


  const eliminarLeccion = () => {
    if (subpartesSinPrimero.length > 1) {
      const updatedLessons = subpartesSinPrimero.slice(0, -1);
      setSubpartesSinPrimero(updatedLessons);
      setLessonTitles(
        updatedLessons.map((content, index) => ({
          title: `Lección ${index + 1}`,
          content,
        }))
      );
      guardarEnLocalStorage();
    }
  };



  const handleLessonTitleChange = (event, index) => {
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].title = event.target.value;
    setLessonTitles(newLessonTitles);
    setCursoG({ ...cursoG, Lessons: subpartesSinPrimero });
    guardarEnLocalStorage();
  };


  const handleLessonContentChange = (event, index) => {
    const newLessonContents = [...lessonContents];
    newLessonContents[index] = event.target.value;
    setLessonContents(newLessonContents);
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].content = event.target.value;
    setLessonTitles(newLessonTitles);
    setCursoG({ ...cursoG, Lessons: subpartesSinPrimero });
    guardarEnLocalStorage();
    
  };


  const guardarEnLocalStorage = () => {
    const cursoAGuardar = { ...cursoG, PrecioDelCurso: costo, DescripcionCurso: descripcionCurso, Lessons: lessonTitles };
    localStorage.setItem('Cursof1', JSON.stringify(cursoAGuardar));
  };



  useEffect(() => {
    const storedCurso = JSON.parse(localStorage.getItem('Cursof1'));
    if (storedCurso) {
      setCosto(storedCurso.PrecioDelCurso || 0);
      setDescripcionCurso(storedCurso.DescripcionCurso || ''); // Nueva adición
      setLessonTitles(subpartesSinPrimero.map((content, index) => ({
        title: `Lección ${index + 1}`,
        content,
      })));
      if (storedCurso.Lessons && Array.isArray(storedCurso.Lessons)) {
        setLessonContents(storedCurso.Lessons.map((lesson) => lesson.content))
        setLessonTitles(storedCurso.Lessons);
        setCurrentLesson(storedCurso.Lessons.length);
      }
    }
  }, []);

  const Guardar = async () => {
    console.log("cursoPASA", cursoG)
    let cursoStringified = JSON.stringify(cursoG);
    try {
      const responseeee = await fetch(`http://localhost:3001/CrearCurso`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: cursoStringified,
      });
    } catch {
      throw new Error(`No se pudo realizar el fetch tipo POST :(`);
    }
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            {subpartesSinPrimero.map((lessonContent, index) => (
              <div key={index} className="form-group">
                <h2 htmlFor={`titulo${index + 1}`}>Título:</h2>
                <input
                  type="text"
                  id={`titulo${index + 1}`}
                  className="input-field large-input"
                  value={`Lección ${index + 1}`}
                  onChange={(e) => handleLessonTitleChange(e, index)}
                />
                <h2 htmlFor={`contenido${index + 1}`}>Contenido:</h2>
                <textarea
                  id={`contenido${index + 1}`}
                  className="input-field large-input"
                  value={lessonContent.content}
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
              <h2 htmlFor="campo7">Descripción del Curso:</h2>
              <textarea
                id="campo7"
                className="input-field large-input"
                value={resumenCurso}
                onChange={(e) => setDescripcionCurso(e.target.value)}
              />
            </div>

            <div className="form-group">

              <h2 htmlFor="campo4">Categorías:</h2>
              <select value={selectedCategory} onChange={handleCategorias}>
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
              <select value={selectedArea} onChange={handleArea}>
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
              <select value={selectedLanguage} onChange={handleIdioma}>
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
                type="number"
                name="precio"
                value={costo}
                className="input-field large-input"
                placeholder="Ingrese el precio"
                onChange={cargarPrecio}
              />
            </div>
          </form>
          <Link to="/MCrearCurso3" className={`crear-curso-option`} onClick={siguiente}>
            Siguiente
          </Link>

          <button className='botonGuardarCambios' onClick={() => Guardar()}>Guardar Cambios</button>

        </div>

      </div>

    </div>
  );
}

export default MCrearCurso2;
