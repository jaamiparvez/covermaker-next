import React, { useState, useEffect, useContext, useRef } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";
import { PropertiesContext } from "../context/PropertiesContext";
function TextStroke() {
  const { canvas, activeObject } = useContext(FabricContext);
  const { strokeOptions, setStrokeOptions } = useContext(PropertiesContext);

  useEffect(() => {
    if (activeObject) {
      const activeOptions = getActiveStyle("stroke", activeObject);
      if (activeOptions) {
        setStrokeOptions(() => {
          return { enabled: true, color: activeOptions };
        });
      } else {
        setStrokeOptions((prevState) => {
          return { ...prevState, enabled: false };
        });
      }
    }
  }, [activeObject]);

  const handleEnableTextStroke = () => {
    if (strokeOptions.enabled) {
      setActiveProp("stroke", null, activeObject, canvas);
    } else {
      setActiveProp("stroke", strokeOptions.color, activeObject, canvas);
    }
    setStrokeOptions((prev) => ({ ...prev, enabled: !prev.enabled }));
  };
  const updateStrokeColor = (e) => {
    setStrokeOptions((prev) => ({ ...prev, color: e.target.value }));
    setActiveProp("stroke", e.target.value, activeObject, canvas);
  };
  return (
    <div className="">
      <div className="">
        <input
          className=""
          type="checkbox"
          checked={strokeOptions.enabled}
          onChange={handleEnableTextStroke}
          id="flexCheckChecked"
        />
        <label className="ml-2" htmlFor="flexCheckChecked">
          Text Stroke
        </label>
        {strokeOptions.enabled && (
          <div>
            <input
            className="ml-6 mt-2"
              type="color"
              value={strokeOptions.color}
              onChange={updateStrokeColor}
            ></input>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextStroke;
