import { useState } from 'react'
import NavBar from './componentes/navBar'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
      <div className='Banner'>
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
