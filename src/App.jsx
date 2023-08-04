import NavBar from './componentes/navBar'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'
import { useState } from 'react'

function App() {
  const [listaCursos, setListaCursos] = useState([])
  const cargarCursos = async(e) =>{
    const response = await fetch('http://localhost:3000/cursos', {
      method: 'GET',
      headers: { "Content-Type": "application/json"},
    })
    console.log(response)
    const dbUser = await response.json()
    console.log(dbUser)
    setListaCursos(dbUser)
  }
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
      {/* <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso> */}
      {
        listaCursos.map(curso => (
          <CardCurso img='https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg' name={curso.NombreDelCurso}  descripcion={curso.resumen}/>
        ))
      }
      </div>
    </>
  )
}

export default App
