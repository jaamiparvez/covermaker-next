import React, { useState, useEffect, useContext, createContext } from "react";

export const BackgroundContext = createContext([]);

export function BackgroundContextProvider({ children }) {
  const [backgroundColor, setBackgroundColor] = useState("#4682b4");
  const [startColor, setStartColor] = useState("#1FF0FF");
  const [endColor, setEndColor] = useState("#4FC461");
  const [directionRadio, setDirectionRadio] = useState({
    left: true,
    top: false,
  });
  return (
    <BackgroundContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        startColor,
        setStartColor,
        endColor,
        setEndColor,
        directionRadio,
        setDirectionRadio,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}
