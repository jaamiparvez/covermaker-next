import React, { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";

const TextBackgroundColor = () => {
  const { canvas, activeObject } = useContext(FabricContext);

  const [options, setOptions] = useState({
    textBackgroundColor: "",
  });

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        textBackgroundColor: getActiveStyle(
          "textBackgroundColor",
          activeObject
        ),
      };
      setOptions((prevState) => {
        return { ...prevState, ...activeOptions };
      });
    }
  }, [activeObject]);

  const updateFill = (e) => {
    setOptions({
      ...options,
      textBackgroundColor: e.target.value,
    });
    setActiveProp("textBackgroundColor", e.target.value, activeObject, canvas);
  };

  const removeColor = () => {
    setOptions({
      ...options,
      backgroundColor: "#ffffff",
    });
    setActiveProp("textBackgroundColor", "", activeObject, canvas);
  };

  return (
    <div className="row g-0">
      <div className="row g-0">Text Background Color</div>
      <div>
        <input
          type="color"
          value={
            options.textBackgroundColor == ""
              ? "#000000"
              : options.textBackgroundColor
          }
          onChange={updateFill}
        />

        {activeObject && activeObject.textBackgroundColor && (
          <button
            onClick={removeColor}
            className="btn-close"
            aria-label="Close"
          ></button>
        )}
      </div>
    </div>
  );
};

export default TextBackgroundColor;
