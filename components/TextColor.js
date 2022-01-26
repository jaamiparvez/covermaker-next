import React, { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp, setActiveStyle } from "../libs/utils";

const TextColor = () => {
  const { canvas, activeObject } = useContext(FabricContext);
  const [options, setOptions] = useState({
    fill: "#000000",
  });

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        fill: getActiveStyle("fill", activeObject),
      };
      setOptions((prevState) => {
        return { ...prevState, ...activeOptions };
      });
    }
  }, [activeObject]);

  const updateFill = (e) => {
    setOptions({
      ...options,
      fill: e.target.value,
    });
    setActiveProp("fill", e.target.value, activeObject, canvas);
  };

  return (
    <div className="row g-0">
      <div className="row g-0">Text Color</div>
      <div>
        <input type="color" value={options.fill} onChange={updateFill}></input>
      </div>
    </div>
  );
};

export default TextColor;
