import { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";

const SolidBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("#4682b4");
  const { canvas } = useContext(FabricContext);

  useEffect(() => {
    if (!canvas) return;
    canvas.setBackgroundColor(backgroundColor);
    canvas.renderAll();
  }, [canvas, backgroundColor]);

  const changeColor = (e) => {
    setBackgroundColor(e.target.value);
    canvas.setBackgroundColor(e.target.value);
    canvas.renderAll();
  };

  return (
    <div className="flex flex-col justify-between w-full">
      <span>Choose Color</span>
      <input
        type="color"
        className="w-full"
        value={backgroundColor}
        onChange={changeColor}
        // onChange={(e) => changeColor(e.target.value)}
      />
    </div>
  );
};

export default SolidBackground;
