import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Store from './Store.jsx'
import Profile from './Profile.jsx';
import CrearCurso from './CrearCurso/CrearCurso.jsx';
import MCrearCurso from './CrearCurso/MCrearCurso.jsx';
import MCrearCurso2 from './CrearCurso/MCrearCurso2.jsx';
import MCrearCurso3 from './CrearCurso/MCrearCurso3.jsx';
import MisPresentaciones from './CrearCurso/MisPresentaciones.jsx';
import CrearCursoIA from './CrearCurso/CrearCursoIA.jsx';
import CrearCursoIA2 from './CrearCurso/CrearCursoIA2.jsx';
import { UsuarioProvider } from '../context/usuarioContext.jsx';
import { CursoProvider } from '../context/cursoContext.jsx';
import { CarritoProvider } from '../context/carritoContext.jsx';
import CrearCursoIA3 from './CrearCurso/CrearCursoIA3.jsx';
import CarritoDeCompras from './CarritoDeCompras.jsx';
import MetodoPago from './MetodoPago.jsx';
import VerCurso from './VerCurso.jsx';
const routes = createBrowserRouter([{
  path: "/",
  element: <App />
},{
  path: "/store",
  element: <Store />
},{
  path: "/Mispresentaciones",
  element: <MisPresentaciones />
},{
  path: "/profile",
  element: <Profile />
},{
  path: "/CrearCurso",
  element: <CrearCurso />
},{
  path: "/MCrearCurso",
  element: <MCrearCurso />
},{
  path: "/MCrearCurso2",
  element: <MCrearCurso2 />
},{
  path: "/MCrearCurso3",
  element: <MCrearCurso3 />
},{
  path: "/CrearCursoIA",
  element: <CrearCursoIA />
},{
  path: "/CrearCursoIA2",
  element: <CrearCursoIA2 />
},{
  path: "/CrearCursoIA3",
  element: <CrearCursoIA3/>
},{
  path: "/CarritoDeCompras",
  element: <CarritoDeCompras/>
},{
  path: "/MetodoPago",
  element: <MetodoPago/>
},{
  path: "/VerCurso",
  element: <VerCurso/>
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <CarritoProvider>
    <CursoProvider>
    <RouterProvider router={routes}/>
    </CursoProvider>
      </CarritoProvider>
    </UsuarioProvider>
  </React.StrictMode>,
)
