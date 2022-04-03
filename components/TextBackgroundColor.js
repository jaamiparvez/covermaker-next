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
            className="pl-2 text-gray-500 hover:text-gray-600"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class=""
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor" fill-rule="evenodd">
                <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
                <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TextBackgroundColor;
