import { createContext, useState } from "react";

export const CursoContext = createContext(null);

export const CursoProvider = ({ children }) => {
  const [cursoG, setCursoG] = useState(JSON.parse(localStorage.getItem('Cursof1')) || null);
  const [iarResult, setIAResult] = useState(null);
  const [iaResumen,setIaResumen]  = useState(null);
  return (
    <CursoContext.Provider value={{ cursoG, setCursoG, iarResult, setIAResult,iaResumen,setIaResumen }}>
      {children}
    </CursoContext.Provider>
  );
};
