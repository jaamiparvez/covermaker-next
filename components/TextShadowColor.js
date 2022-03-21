import { useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { PropertiesContext } from "../context/PropertiesContext";
import { getActiveStyle, setActiveProp } from "../libs/utils";

const TextShadowColor = () => {
  const { canvas, activeObject } = useContext(FabricContext);
  const { shadowOptions, setShadowOptions } = useContext(PropertiesContext);
  useEffect(() => {
    if (activeObject) {
      const activeOptions = getActiveStyle("shadow", activeObject);

      setShadowOptions((prevState) => {
        return { ...prevState, ...activeOptions };
      });
    }
  }, [activeObject]);

  const updateShadowColor = (e) => {
    const prevValues = getActiveStyle("shadow", activeObject);
    setShadowOptions({ ...shadowOptions, color: e.target.value });
    setActiveProp(
      "shadow",
      { ...prevValues, color: e.target.value },
      activeObject,
      canvas
    );
  };

  return (
    <div className="">
      <div className="mb-2">Color</div>
      <div>
        <input
          type="color"
          value={shadowOptions.color}
          onChange={updateShadowColor}
        ></input>
      </div>
    </div>
  );
};

export default TextShadowColor;
