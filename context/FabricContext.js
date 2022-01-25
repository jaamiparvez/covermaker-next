import React, { useCallback, createContext, useState } from "react";

import { fabric } from "fabric";

export const FabricContext = createContext([]);

export const FabricContextProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [activeObject, setActiveObject] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#4682b4");
  const [startColor, setStartColor] = useState("#1FF0FF");
  const [endColor, setEndColor] = useState("#4FC461");
  const [directionRadio, setDirectionRadio] = useState({
    left: true,
    top: false,
  });
  const [enableTextShadow, setEnableTextShadow] = useState(false);
  const [shadowOptions, setShadowOptions] = useState({
    color: "#000000",
    offsetX: 0,
    offsetY: 0,
    blur: 0,
  });

  const [strokeOptions, setStrokeOptions] = useState({
    color: "#000000",
    enabled: false,
  });

  fabric.Object.prototype.set({
    cornerColor: "white",
    cornerSize: 8,
    transparentCorners: false,
  });

  fabric.Object.prototype.setControlsVisibility({
    ml: false,
    mr: false,
    mt: false,
    mb: false,
  });

  const initCanvas = useCallback((el) => {
    const canvasOptions = {
      preserveObjectStacking: true,
      selection: true,
      defaultCursor: "default",
      backgroundColor: "#4682b4",
    };

    let c = new fabric.Canvas(el, canvasOptions);

    const title = new fabric.IText("Title", {
      fill: "#FFC800",
      // width: 200,
      left: 50,
      top: 100,
      fontSize: 48,
      cornerStyle: "circle",
    });

    const writer = new fabric.IText("Writer Name", {
      fill: "#FFC800",
      // width: 200,
      left: 50,
      top: 200,
      fontSize: 48,
      cornerStyle: "circle",
      // fontFamily: "Merriweather",
    });

    c.add(title);
    c.add(writer);

    c.renderAll();
    setCanvas(c);
  }, []);

  return (
    <FabricContext.Provider
      //reomve anything that is not needed in multiple components
      value={{
        canvas,
        initCanvas,
        activeObject,
        setActiveObject,
        backgroundColor,
        setBackgroundColor,
        startColor,
        setStartColor,
        endColor,
        setEndColor,
        directionRadio,
        setDirectionRadio,
        enableTextShadow,
        setEnableTextShadow,
        shadowOptions,
        setShadowOptions,
        strokeOptions, //remove from here and add to stroke component
        setStrokeOptions,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};
