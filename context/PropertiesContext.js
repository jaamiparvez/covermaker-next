import React, { useState, useEffect, useContext, createContext } from "react";

export const PropertiesContext = createContext([]);

export function PropertiesContextProvider({ children }) {
  const [backgroundColor, setBackgroundColor] = useState("#4682b4");
  const [startColor, setStartColor] = useState("#1FF0FF");
  const [endColor, setEndColor] = useState("#4FC461");
  const [directionRadio, setDirectionRadio] = useState({
    left: true,
    top: false,
  });
  const [strokeOptions, setStrokeOptions] = useState({
    color: "#000000",
    enabled: false,
  });
  const [enableTextShadow, setEnableTextShadow] = useState(false);
  const [shadowOptions, setShadowOptions] = useState({
    color: "#000000",
    offsetX: 0,
    offsetY: 0,
    blur: 0,
  });
  return (
    <PropertiesContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        startColor,
        setStartColor,
        endColor,
        setEndColor,
        directionRadio,
        setDirectionRadio,
        strokeOptions,
        setStrokeOptions,
        enableTextShadow,
        setEnableTextShadow,
        shadowOptions,
        setShadowOptions,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}
