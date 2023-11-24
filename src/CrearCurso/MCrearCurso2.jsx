import React, { useState, useEffect } from 'react';
import './MCrearCurso2.css';
import { Link } from 'react-router-dom';
import NavBar from '../componentes/navBar-iniciada.jsx';
import { useContext } from 'react';
import { CursoContext } from './../../context/cursoContext';

function MCrearCurso2() {
  const [costo, setCosto] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(3);
  const { cursoG } = useContext(CursoContext);
  const [lessonTitles, setLessonTitles] = useState( cursoG?.lessons || [
    { title: 'Lección 1', content: '' },
    { title: 'Lección 2', content: '' },
    { title: 'Lección 3', content: '' },
  ]);
  const { setCursoG } = useContext(CursoContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLanguage, setSelectedIdioma] = useState('');
  const [listaCategorias, setListaCategorias] = useState([]);
  const [listaAreas, setListaAreas] = useState([]);
  const [listaIdiomas, setListaIdiomas] = useState([]);
  const [ListasCargadas, setListasCargadas] = useState(true);
  const [Lecciones, setLecciones] = useState([])
  const cargarListas= async () => {
    console.log(cursoG)
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
  useEffect(()=>async()=>await cargarListas(), [])
  
  const cargarPrecio = (e) => {
    setCosto(e.target.value);

    guardarEnLocalStorage(); // Guardar en localStorage cuando cambia el precio
  };
  const handleIdioma  = (e) => {
    
    const idiomaBuscado = e.target.value;
    const idiomaEncontrado = listaIdiomas.find((idioma) => idioma.Idioma === idiomaBuscado);
    if (idiomaEncontrado) {
      setSelectedIdioma(e.target.value)
    } else {
      console.log("Malio Sal")
    }
    setCursoG({...cursoG, idIdioma: idiomaEncontrado.idIdioma})
  
  }
  const handleArea = (e) => {
    
    const AreaBuscada = e.target.value;
    const AreaEncontrada = listaAreas.find((Area) => Area.NombreArea === AreaBuscada);
    if (AreaEncontrada) {
      setSelectedArea(e.target.value)
      
    } else {
      console.log("Malio Sal")
    }
    setCursoG({...cursoG, idAreas: AreaEncontrada.idAreas})

  
  }
  const handleCategorias = (e) => {
    
    const CategoryBuscado = e.target.value;
    const CategoryEncontrado = listaCategorias.find((Category) => Category.NombreCategoria === CategoryBuscado);
    if (CategoryEncontrado) {
      setSelectedCategory(e.target.value)
    } else {
      console.log("Malio Sal")
    }
    setCursoG({...cursoG, idCategorias: CategoryEncontrado.idCategoria})

  
  }
  const siguiente = async() => {
   // setCursoG({ ...cursoG, opciones: [selectedCategory, selectedArea, selectedLanguage] });
   await Guardar()
   await setCursoG({ ...cursoG, PrecioDelCurso: costo });
    
  };

  const agregarLeccion = () => {
    crearNuevaLeccion()
    setCurrentLesson(currentLesson + 1);
    setLessonTitles([
      ...lessonTitles,
      { title: `Lección ${currentLesson + 1}`, content: '' },
    ]);
  };

  const eliminarLeccion = () => {
    deleteLeccion();
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setLessonTitles(lessonTitles.slice(0, -1));
    }
  };

  const handleLessonTitleChange = (event, index) => {
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].title = event.target.value;
    setLessonTitles(newLessonTitles);
    setCursoG({ ...cursoG, Lessons: newLessonTitles });
    guardarEnLocalStorage(); // Guardar en localStorage cuando cambia el título
  };
  
  // Actualizar el contenido de la lección cuando cambia
  const handleLessonContentChange = (event, index) => {
    const newLessonTitles = [...lessonTitles];
    newLessonTitles[index].content = event.target.value;
    setLessonTitles(newLessonTitles);
    setCursoG({ ...cursoG, Lessons: newLessonTitles });
    guardarEnLocalStorage(); // Guardar en localStorage cuando cambia el contenido
  };

  // Función para guardar en localStorage
  const guardarEnLocalStorage = () => {
    const cursoAGuardar = { ...cursoG, PrecioDelCurso: costo, Lessons: lessonTitles };
    localStorage.setItem('Cursof1', JSON.stringify(cursoAGuardar));
  };
  
  const crearNuevaLeccion = async () => {
  const nuevaLeccion = {
    idCurso: 1, // Reemplaza con el ID del curso al que deseas agregar la lección
    nombreLeccion: "Nueva Lección",
    contenidoLeccion: "Contenido de la nueva lección"
};

  }
  const deleteLeccion = async () => {
    const idCurso = 1; // Reemplaza con el ID del curso
    const idLeccion = 1; // Reemplaza con el ID de la lección que deseas eliminar
    
    const responseDelete = await fetch(`http://localhost:3000/deleteLeccion/${idCurso}/${idLeccion}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    });
    
     await responseDelete.json();
    
  }
  useEffect(() => {
    const storedCurso = JSON.parse(localStorage.getItem('Cursof1'));
    if (storedCurso) {
      setCosto(storedCurso.PrecioDelCurso || 0);
      if (storedCurso.Lessons && Array.isArray(storedCurso.Lessons)) {
        setLessonTitles(storedCurso.Lessons);
        setCurrentLesson(storedCurso.Lessons.length);
      }
    }
 
  }, []);

  const Guardar = async() => {
    console.log("cursoPASA", cursoG)
      let cursoStringified = JSON.stringify(cursoG);
      try {
        
         await fetch(`http://localhost:3000/CrearCurso`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: cursoStringified,
        });
      } catch {
        throw new Error(`No se pudo realizar el fetch tipo POST :(`);
      }
    
    }

  return (
    <div>
      <NavBar></NavBar>
      <div className="formularios-view-container">
        <div className="formularios-view-column">
          <form>
            {lessonTitles.map((lesson, index) => (
              <div key={index} className="form-group">
                <h2 htmlFor={`titulo${index + 1}`}>Título:</h2>
                <input
                  type="text"
                  id={`titulo${index + 1}`}
                  className="input-field large-input"
                  value={lesson.title}
                  onChange={(e) => handleLessonTitleChange(e, index)}
                />
                <h2 htmlFor={`contenido${index + 1}`}>Contenido:</h2>
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
              <button className='botonGuardarCambios' onClick={()=>Guardar()}>Guardar Cambios</button> 
        </div>
      </div>
      <Link to="/MCrearCurso" className={`crear-curso-option`} onClick={siguiente}>
            Atras
          </Link>
      <div>
    </div>
    </div>
  );
}

export default MCrearCurso2;
