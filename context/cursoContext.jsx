import { createContext, useState } from "react";

export const CursoContext = createContext(null);

export const CursoProvider = ({ children }) => {
  const [cursoG, setCursoG] = useState(JSON.parse(localStorage.getItem('Cursof1')) || null);
  const [iarResult, setIAResult] = useState(null);

  return (
    <CursoContext.Provider value={{ cursoG, setCursoG, iarResult, setIAResult }}>
      {children}
    </CursoContext.Provider>
  );
};
