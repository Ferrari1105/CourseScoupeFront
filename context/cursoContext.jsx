import { createContext, useState } from "react"

export const CursoContext = createContext(null)

export const CursoProvider = ({ children }) => {

    const [cursoG, setCursoG] = useState()
    

    return (
        <CursoContext.Provider value={{cursoG, setCursoG}}>
            {children}
        </CursoContext.Provider>
    )
}