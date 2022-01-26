import { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { BackgroundContext } from "../context/BackgroundContext";

const SolidBackground = () => {
  const { canvas } = useContext(FabricContext);
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundContext);
  // const [backgroundColor, setBackgroundColor] = useState("#4682b4");
  console.log("backgroundColor in SolidBackground", backgroundColor);
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
      />
    </div>
  );
};

export default SolidBackground;
