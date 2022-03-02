import React, { useState, useEffect, useContext, createContext } from "react";
import { FabricContext } from "./../context/FabricContext";
import TextProperties from "./TextProperties";
import BackgroundProperties from "./BackgroundProperties";
import { PropertiesContextProvider } from "../context/PropertiesContext";

export default function Properties() {
  const { activeObject } = useContext(FabricContext);
  const [isObjectSelected, setIsObjectSelected] = useState(false);
  useEffect(() => {
    setIsObjectSelected(
      activeObject
        ? activeObject.get("type") === "i-text" ||
            activeObject.get("type") === "activeSelection"
        : false
    );
  }, [activeObject]);
  function getSelectedName() {
    if (activeObject) {
      return activeObject.text === undefined
        ? "Multi-Select"
        : activeObject.text;
    } else {
      return "Background";
    }
  }

  return (
    <PropertiesContextProvider>
      <div className="w-[280px] h-[1280px] shadow-sm  flex flex-col border-2 border-gray-200 rounded-md">
        <div className="px-4 py-2 bg-gray-100 border-b-2 border-b-gray-200">{getSelectedName()} Properties</div>
        <div className="p-4">
          <div>
            {isObjectSelected ? <TextProperties /> : <BackgroundProperties />}
          </div>
        </div>
      </div>
    </PropertiesContextProvider>
  );
}
