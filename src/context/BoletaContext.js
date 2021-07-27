import { createContext, useState } from "react";
export const BoletaContext = createContext();

export const BoletaProvider = ({ children }) => {
  const [MontoLiquido, setMontoLiquido] = useState({
    boleta: 0,
    pago: 0,
    retension: 0,
  });

  const [MontoBruto, setMontoBruto] = useState({
    boleta: 0,
    pago: 0,
    retension: 0,
  });
  return (
    <div>
      <BoletaContext.Provider
        value={{ MontoLiquido, setMontoLiquido, MontoBruto, setMontoBruto }}
      >
        {children}
      </BoletaContext.Provider>
    </div>
  );
};