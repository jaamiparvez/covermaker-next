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
      <div className="card properties">
        <div className="card-header ">{getSelectedName()} Properties</div>
        <div className="card-body row g-0">
          <div className="row g-0">
            {isObjectSelected ? <TextProperties /> : <BackgroundProperties />}
          </div>
        </div>
      </div>
    </PropertiesContextProvider>
  );
}
