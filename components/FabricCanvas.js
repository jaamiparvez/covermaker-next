import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import { FabricContext } from "../context/FabricContext";
export default function FabricCanvas({ width = 720, height = 1280 }) {
  const canvasRef = useRef(null);
  const { canvas, initCanvas, setActiveObject } = useContext(FabricContext);
  useEffect(() => {
    initCanvas(canvasRef.current, width, height);
  }, [canvasRef, width, height]);
  const updateActiveObject = useCallback(
    (e) => {
      if (!e) {
        return;
      }
      setActiveObject(canvas.getActiveObject());
      canvas.renderAll();
    },
    [canvas, setActiveObject]
  );

  useEffect(() => {
    if (!canvas) {
      return;
    }
    canvas.on("selection:created", updateActiveObject);
    canvas.on("selection:updated", updateActiveObject);
    canvas.on("selection:cleared", updateActiveObject);

    return () => {
      canvas.off("selection:created");
      canvas.off("selection:cleared");
      canvas.off("selection:updated");
    };
  }, [canvas, updateActiveObject]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={width}
        height={height}
      ></canvas>
    </div>
  );
}
