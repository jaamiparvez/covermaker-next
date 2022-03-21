import React, { useState, useEffect, useContext, useRef } from "react";
import { FabricContext } from "../context/FabricContext";
import { PropertiesContext } from "../context/PropertiesContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";
import TextShadowColor from "./TextShadowColor";

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
      <div className="">
        <div className="">
          <input
            className=""
            type="checkbox"
            checked={enableTextShadow}
            onChange={handleEnableTextShadow}
            id="flexCheckChecked"
          />
          <label className="ml-2" htmlFor="flexCheckChecked">
            Text Shadow
          </label>
        </div>
        {enableTextShadow && (
          <>
            <div className="my-6">
              <label htmlFor="horizontal" className="form-label">
                Horizontal Direction
              </label>

              <input
                type="range"
                step="1"
                min="-100"
                max="100"
                className="mt-4 w-full"
                id="horizontal"
                onChange={changeHorizontal}
                value={shadowOptions.offsetX}
              />
            </div>
            <div className="my-6">
              <label htmlFor="vertical" className="">
                Vertical Direction
              </label>
              <input
                ref={inputRef}
                type="range"
                step="1"
                min="-30"
                max="30"
                className="mt-4 w-full"
                id="vertical"
                onChange={changeVertical}
                value={shadowOptions.offsetY}
              />
            </div>
            <div className="my-6">
              <label htmlFor="blur" className="">
                Blur
              </label>
              <input
                type="range"
                step="1"
                min="0"
                max="35"
                className="mt-4 w-full"
                id="blur"
                onChange={changeBlur}
                value={shadowOptions.blur}
              />
            </div>
            <TextShadowColor />
          </>
        )}
      </div>
    </div>
  );
};

export default TextShadow;
