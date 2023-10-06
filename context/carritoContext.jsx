import { createContext, useState } from "react"

export const CarritoContext = createContext(null)

export const CarritoProvider = ({ children }) => {

    const [carritoG, setCarritoG] = useState(JSON.parse(localStorage.getItem('carrito')) || null)
    

    return (
        <CarritoContext.Provider value={{carritoG, setCarritoG}}>
            {children}
        </CarritoContext.Provider>
    )
}