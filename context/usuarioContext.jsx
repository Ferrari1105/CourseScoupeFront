import { createContext, useState } from "react"

export const UsuarioContext = createContext(null)

export const UsuarioProvider = ({ children }) => {

    const [usuarioG, setUsuarioG] = useState()
    

    return (
        <UsuarioContext.Provider value={{usuarioG, setUsuarioG}}>
            {children}
        </UsuarioContext.Provider>
    )
}