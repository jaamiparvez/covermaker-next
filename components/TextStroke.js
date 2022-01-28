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
    <div className="row g-0">
      <div className="row form-check g-0">
        <input
          className="form-check-input"
          type="checkbox"
          checked={strokeOptions.enabled}
          onChange={handleEnableTextStroke}
          id="flexCheckChecked"
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Text Stroke
        </label>
        {strokeOptions.enabled && (
          <div>
            <input
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
