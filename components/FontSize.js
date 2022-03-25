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
      <div>
        <div className="">Font Size</div>
        <div className="relative flex w-28">
          <input
            className="w-full text-md border border-gray-300 rounded-l-md "
            type="text"
            value={options.fontSize}
            onChange={updateFontSize}
          ></input>
          <div className="flex px-3 items-center bg-gray-200/80 border border-gray-300 border-l-0 rounded-r-md">
            <span className="sm:text-sm">px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontSize;
