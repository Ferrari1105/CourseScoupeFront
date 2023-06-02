import { useState } from 'react'
import './App.css'
import NavBar from './componentes/navBar'
import Banner from './componentes/banner'
import CardCurso from './componentes/cardCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavBar></NavBar>
    </div>
      <div>
      <Banner></Banner>
      </div>
      <div>
        <CardCurso></CardCurso>
      </div>
    </>
  )
}

export default App
