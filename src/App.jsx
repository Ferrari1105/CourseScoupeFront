import { useEffect, useState } from 'react'
import NavBar from './componentes/navBar'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'

function App() {
  const [test, setTest] = useState()
  useEffect(() => async() => {
    const response = await fetch('http://localhost:3001/usuarios') // falta poner el CORS en la api para que otros servidores puedan comunicarse con ella 
    const data = await response.json()
    setTest(data)
  })
  return (
    <>
    <div>
      <NavBar data={test}></NavBar>
    </div>
      <div className='Banner'>
        <span></span>
      <Banner></Banner>
      </div>
      <div className='CardsHome'>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      <CardCurso img="https://dc722jrlp2zu8.cloudfront.net/media/facebook-ads-c-sharp-principiantes.jpg" name="C#" descripcion="curso de C#"></CardCurso>
      </div>
    </>
  )
}

export default App
