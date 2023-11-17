import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import { useState, useEffect } from 'react'
import NavBar from './componentes/navBar';
import { useContext } from "react"
import { UsuarioContext } from '../context/usuarioContext';
import NavBarIniciada from './componentes/navBar-iniciada.jsx'
function App() {
  const [listaCursos, setListaCursos] = useState([])
  const [cursosCargados, setCursosCargados] = useState(false);
  const {usuarioG} = useContext(UsuarioContext)
  const cargarCursos = async () => {

    if (!cursosCargados) {
      const response = await fetch('http://localhost:3000/cursosTerminados', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
      });
      const dbUser = await response.json();
      setListaCursos(dbUser);
      setCursosCargados(true); // Marcar que los cursos se han cargado
    }
  };

  useEffect(()=>async()=>await cargarCursos(), [])
 
  return (
    <>
   {usuarioG? (
              <NavBarIniciada/>
            ) : (
              <NavBar/>
            )}
        <span></span>
      <Banner />
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
