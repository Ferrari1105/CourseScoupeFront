import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import Store from './Store.jsx'
import Home from './Home-Iniciada.jsx'
import MisPresentaciones from './MisPresentaciones.jsx';
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
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
