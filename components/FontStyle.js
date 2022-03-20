import React, { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp, setActiveStyle } from "../libs/utils";

const FontStyle = () => {
  const { canvas, activeObject } = useContext(FabricContext);

  const [options, setOptions] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "normal",
  });

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        fontWeight: getActiveStyle("fontWeight", activeObject),
        fontStyle: getActiveStyle("fontStyle", activeObject),
        textDecoration: getActiveStyle("textDecoration", activeObject),
      };
      setOptions({ ...options, ...activeOptions });
    }
  }, [activeObject]);

  const updateFontSize = (e) => {
    setOptions({
      ...options,
      fontSize: e.target.value,
    });
    setActiveProp("fontSize", e.target.value, activeObject, canvas);
  };

  const updateBold = (e) => {
    const value = options.fontWeight === "bold" ? "normal" : "bold";
    setOptions({
      ...options,
      fontWeight: value,
    });
    setActiveStyle("fontWeight", value, activeObject);
  };

  const updateItalic = (e) => {
    const value = options.fontStyle === "italic" ? "normal" : "italic";
    setOptions({
      ...options,
      fontStyle: value,
    });
    setActiveStyle("fontStyle", value, activeObject);
  };

  const updateUnderline = (e) => {
    const value = options.textDecoration === "underline" ? "" : "underline";

    setOptions({
      ...options,
      textDecoration: value,
    });
    setActiveStyle("textDecoration", value, activeObject);
    setActiveStyle("underline", !!value.length, activeObject);
  };

  return (

      <div>
        <div className="mb-4">Font Style</div>
        <div
          className="flex flex-row rounded-md mb-8"
          role="group"
          aria-label="Font style checkbox toggle button group"
        >
        <div>
          <input
            type="checkbox"
            className="sr-only peer"
            name="bold"
            id="bold"
            autoComplete="off"
            onChange={updateBold}
            checked={options.fontWeight === "bold" ? true : false}
          />
          <label className="relative peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white 
        border border-r-0 border-gray-500 rounded-l-md px-4 py-2 mx-0 peer-focus:z-10  peer-focus:ring  peer-focus:ring-gray-400 font-bold" htmlFor="bold">
          B
        </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="sr-only peer"
            name="underline"
            id="underline"
            autoComplete="off"
            onChange={updateUnderline}
            checked={options.textDecoration === "underline" ? true : false}
          />
          <label className="relative peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white
         border border-gray-500  px-4 py-2 mx-0 peer-focus:ring peer-focus:z-10 peer-focus:ring-gray-400 underline" htmlFor="underline">
          U
        </label>
        </div>
       
       <div>
          <input
            type="checkbox"
            className="sr-only peer"
            name="options-outlined"
            id="italics"
            autoComplete="off"
            onChange={updateItalic}
            checked={options.fontStyle === "italic" ? true : false}
          />
          
          <label
           className="relative peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white
            border border-l-0 border-gray-500 rounded-r-md px-4 py-2 mx-0 peer-focus:z-10 peer-focus:ring peer-focus:ring-gray-400 italic"
            htmlFor="italics"
           
          >
            I
          </label>
          </div>
        </div>
      </div>

  );
};

export default FontStyle;
