import React, { useState, useEffect, useContext, useRef } from "react";
import { FabricContext } from "../context/FabricContext";
import { PropertiesContext } from "../context/PropertiesContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";
// import TextShadowColor from "./TextShadowColor";

const TextShadow = () => {
  const { canvas, activeObject } = useContext(FabricContext);
  const {
    shadowOptions,
    setShadowOptions,
    enableTextShadow,
    setEnableTextShadow,
  } = useContext(PropertiesContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (activeObject) {
      const activeOptions = getActiveStyle("shadow", activeObject);
      if (activeOptions) {
        setEnableTextShadow(true);
        setShadowOptions((prevState) => {
          return { ...prevState, ...activeOptions };
        });
      } else {
        setEnableTextShadow(false);
      }
    }
  }, [activeObject]);

  const changeVertical = (e) => {
    const prevValues = getActiveStyle("shadow", activeObject);
    setShadowOptions({ ...shadowOptions, offsetY: e.target.value });
    setActiveProp(
      "shadow",
      { ...prevValues, offsetY: e.target.value },
      activeObject,
      canvas
    );
  };

  const changeHorizontal = (e) => {
    const prevValues = getActiveStyle("shadow", activeObject);
    setShadowOptions({ ...shadowOptions, offsetX: e.target.value });
    setActiveProp(
      "shadow",
      { ...prevValues, offsetX: e.target.value },
      activeObject,
      canvas
    );
  };

  const changeBlur = (e) => {
    const prevValues = getActiveStyle("shadow", activeObject);

    setShadowOptions({ ...shadowOptions, blur: e.target.value });
    setActiveProp(
      "shadow",
      { ...prevValues, blur: e.target.value },
      activeObject,
      canvas
    );
  };

  const handleEnableTextShadow = () => {
    if (enableTextShadow) {
      setActiveProp("shadow", null, activeObject, canvas);
    } else {
      setActiveProp("shadow", shadowOptions, activeObject, canvas);
    }
    setEnableTextShadow(!enableTextShadow);
  };

  return (
    <div>
      <div className="row g-0">
        <div className="row form-check g-0">
          <input
            className="form-check-input"
            type="checkbox"
            checked={enableTextShadow}
            onChange={handleEnableTextShadow}
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Text Shadow
          </label>
        </div>
        {enableTextShadow && (
          <>
            <div className="row g-0 my-3">
              <label htmlFor="horizontal" className="form-label">
                Horizontal Direction
              </label>

              <input
                type="range"
                step="1"
                min="-100"
                max="100"
                className="form-range"
                id="horizontal"
                onChange={changeHorizontal}
                value={shadowOptions.offsetX}
              />
            </div>
            <div className="row g-0">
              <label htmlFor="vertical" className="form-label">
                Vertical Direction
              </label>
              <input
                ref={inputRef}
                type="range"
                step="1"
                min="-30"
                max="30"
                className="form-range"
                id="vertical"
                onChange={changeVertical}
                value={shadowOptions.offsetY}
              />
            </div>
            <div className="row g-0 my-3">
              <label htmlFor="blur" className="form-label">
                Blur
              </label>
              <input
                type="range"
                step="1"
                min="0"
                max="35"
                className="form-range"
                id="blur"
                onChange={changeBlur}
                value={shadowOptions.blur}
              />
            </div>
            {/* <TextShadowColor /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default TextShadow;
