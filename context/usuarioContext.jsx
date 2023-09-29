import { createContext, useState } from "react"

export const UsuarioContext = createContext(null)

export const UsuarioProvider = ({ children }) => {

    const [usuarioG, setUsuarioG] = useState(JSON.parse(localStorage.getItem('usuario')) || null)
    

    return (
        <UsuarioContext.Provider value={{usuarioG, setUsuarioG}}>
            {children}
        </UsuarioContext.Provider>
    )
}