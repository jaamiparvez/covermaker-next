import React, { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";

const FontSize = () => {
  const { canvas, activeObject } = useContext(FabricContext);
  const [options, setOptions] = useState({
    fontSize: 24,
  });

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        fontSize: getActiveStyle("fontSize", activeObject),
      };
      setOptions((prevState) => {
        return { ...prevState, ...activeOptions };
      });
    }
  }, [activeObject]);

  const updateFontSize = (e) => {
    setOptions({
      ...options,
      fontSize: e.target.value,
    });
    setActiveProp("fontSize", e.target.value, activeObject, canvas);
  };

  return (
    <div>
      <div className="row g-0">
        <div className="row g-0">Font Size</div>

        <div className="input-group mb-3 w-50">
          <input
            className="form-control"
            type="text"
            value={options.fontSize}
            onChange={updateFontSize}
          ></input>
          <div className="input-group-append">
            <span className="input-group-text">px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSize;
