import React, { useCallback, createContext, useState } from "react";

import { fabric } from "fabric";

export const FabricContext = createContext([]);

export const FabricContextProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);
  const [activeObject, setActiveObject] = useState(null);

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

  const initCanvas = useCallback((canvasRef, width, height) => {
    const canvasOptions = {
      preserveObjectStacking: true,
      selection: true,
      defaultCursor: "default",
      backgroundColor: "#4682b4",
      width: width,
      height: height,
    };

    let c = new fabric.Canvas(canvasRef, canvasOptions);
    // c.setDimensions({width:400, height:200});

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
      value={{
        canvas,
        initCanvas,
        activeObject,
        setActiveObject,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};
