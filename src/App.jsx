import NavBar from './componentes/navBar'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import { useState } from 'react'

function App() {
  const [listaCursos, setListaCursos] = useState([])
  const [cursosCargados, setCursosCargados] = useState(false);
  const cargarCursos = async () => {
    if (!cursosCargados) {
      const response = await fetch('http://localhost:3000/cursos', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUser = await response.json();
      setListaCursos(dbUser);
      setCursosCargados(true); // Marcar que los cursos se han cargado
    }
  };
  cargarCursos()
  return (
    <>
    <div>
      <NavBar />
    </div>
      <div className='Banner'>
        <span></span>
      <Banner />
      </div>
      <div className='CardsHome'> 
      {
        listaCursos.map(curso => (
          <CardCurso  key={curso.idCurso} id={curso.idCurso} img={curso.PortadaCurso} name={curso.NombreDelCurso}  descripcion={curso.ResumenCurso}/>
        ))
      }
      </div>
    </>
  )
}

export default App
