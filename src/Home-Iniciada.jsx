import { useState,useEffect } from 'react'
import NavBar from './componentes/navBar-iniciada'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'

function Home() {
  const [listaCursos, setListaCursos] = useState([])
  const cargarCursos = async() =>{
    const response = await fetch('http://localhost:3000/cursos', {
      method: 'GET',
      headers: { "Content-Type": "application/json"},
    })
    const dbUser = await response.json()
    setListaCursos(dbUser)
  }
  useEffect(()=>async()=>await cargarCursos(), [])
  
  return (
    <>
    <div>
      <NavBar ></NavBar>
    </div>
      <div className='Banner'>
      <Banner ></Banner>
      </div>
      <div className='CardsHome'>
      {
        listaCursos.map(curso => (
          <CardCurso img={curso.PortadaCurso} name={curso.NombreDelCurso}  descripcion={curso.ResumenCurso}/>
        ))
      }
      </div>
    </>
  )
}

export default Home
