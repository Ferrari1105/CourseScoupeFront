import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Store from './Store.jsx'
import Profile from './Profile.jsx';
import Home from './Home-Iniciada.jsx'
import CardCart from './CardCart.jsx';
import CrearCurso from './CrearCurso.jsx';
import MCrearCurso from './MCrearCurso.jsx';
import MCrearCurso2 from './MCrearCurso2.jsx';
import MCrearCurso3 from './MCrearCurso3.jsx';
import CursoTerminado from './CursoTerminado.jsx';
import MisPresentaciones from './MisPresentaciones.jsx';
import { UsuarioProvider } from '../context/usuarioContext.jsx';
const routes = createBrowserRouter([{
  path: "/",
  element: <App />
},{
  path: "/store",
  element: <Store />
},{
  path: "/homeiniciada",
  element: <Home />
},{
  path: "/mispresentaciones",
  element: <MisPresentaciones />
},{
  path: "/profile",
  element: <Profile />
},{
  path: "/cardcart",
  element: <CardCart />
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
  path: "/CursoTerminado",
  element: <CursoTerminado />
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
    <RouterProvider router={routes}/>
    </UsuarioProvider>
  </React.StrictMode>,
)
