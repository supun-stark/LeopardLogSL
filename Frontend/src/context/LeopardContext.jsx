//Hold the leopard counts and the functions to update them
import React, { createContext, useState } from 'react';

// Create the context
export const LeopardContext = createContext();

// Create a provider component
export const LeopardProvider = ({ children }) => {
  const [yalaRecordedLeopards, setYalaRecordedLeopards] = useState(143);
  //const [yalaActiveLeopards, setYalaActiveLeopards] = useState(0);
  const [wilpattuRecordedLeopards, setWilpattuRecordedLeopards] = useState(154);
  //const [wilpattuActiveLeopards, setWilpattuActiveLeopards] = useState(0);
  const [hortonPlainsRecordedLeopards, setHortonPlainsRecordedLeopards] = useState(18);
  //const [hortonPlainsActiveLeopards, setHortonPlainsActiveLeopards] = useState(0);

  return (
    <LeopardContext.Provider
      value={{
        yalaRecordedLeopards,
        setYalaRecordedLeopards,
        // yalaActiveLeopards,
        // setYalaActiveLeopards,
        wilpattuRecordedLeopards,
        setWilpattuRecordedLeopards,
        // wilpattuActiveLeopards,
        // setWilpattuActiveLeopards,
        hortonPlainsRecordedLeopards,
        setHortonPlainsRecordedLeopards,
        // hortonPlainsActiveLeopards,
        // setHortonPlainsActiveLeopards,
      }}
    >
      {children}
    </LeopardContext.Provider>
  );
};
