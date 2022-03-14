import React, { useState, useEffect, useContext, useRef } from "react";
import { fabric } from "fabric";
import { FabricContext } from "../context/FabricContext";
import { PropertiesContext } from "../context/PropertiesContext";

const GraidentBackground = () => {
  const { canvas } = useContext(FabricContext);
  const {
    startColor,
    setStartColor,
    endColor,
    setEndColor,
    directionRadio,
    setDirectionRadio,
  } = useContext(PropertiesContext);

  const startRef = useRef({});
  const endRef = useRef({});

  const [pos, setPos] = useState({});
  const [enabled, setEnabled] = useState(false);

  const changeStartColor = (e) => {
    setStartColor(e.target.value);
  };

  const changeEndColor = (e) => {
    setEndColor(e.target.value);
  };

  const invertColors = () => {
    const temp = startRef.current.value;
    startRef.current.value = endRef.current.value;
    endRef.current.value = temp;

    setStartColor(startRef.current.value);
    setEndColor(endRef.current.value);
  };

  const setPositionForLeft = () => {
    setDirectionRadio({
      left: true,
      top: false,
    });
    setPos({
      x1: 0,
      y1: canvas.height / 2,
      x2: canvas.width,
      y2: canvas.width,
    });
  };

  const setPositionForTop = () => {
    setDirectionRadio({
      left: false,
      top: true,
    });
    setPos({
      x1: canvas.width / 2,
      y1: 0,
      x2: canvas.width,
      y2: canvas.height,
    });
  };

  useEffect(() => {
    directionRadio.left ? setPositionForLeft() : setPositionForTop();
  }, [directionRadio.left]);

  useEffect(() => {
    var gradient = new fabric.Gradient({
      type: "linear",
      gradientUnits: "pixels", // or 'percentage'
      coords: {
        x1: pos.x1,
        y1: pos.y1,
        x2: pos.x2,
        y2: pos.y2,
      },
      colorStops: [
        { offset: 0, color: startColor },
        { offset: 1, color: endColor },
      ],
    });

    canvas.backgroundColor = gradient.toLive(canvas.contextContainer);
    canvas.renderAll();
  }, [startColor, endColor, canvas, pos]);

  const handleSwitchClick = () => {
    setEnabled(!enabled);
    invertColors();
  }
  return (
    <div
      className="row g-0"
      style={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <br />
      <div className="row g-0">Start</div>
      <input
      className="focus:outline-none focus:ring"
        type="color"
        ref={startRef}
        value={startColor}
        onChange={changeStartColor}
      />
      <br />
      <div className="row g-0">End</div>
      <input
       className="focus:outline-none focus:ring"
        type="color"
        ref={endRef}
        value={endColor}
        onChange={changeEndColor}
      />
      <br />

      <div className="mt-6">
        <button
          onClick={handleSwitchClick}
          aria-checked={enabled}
          class={`${enabled ? "bg-blue-600" : "bg-gray-200"} relative inline-flex items-center border border-gray-400 w-9 h-4 rounded-full focus:outline-none focus:ring`}
          role="switch"
          type="button"
          tabindex="0"
        >
          <span className="sr-only">Invert Colors</span>
          <span
            className={`transform transition ease-in-out duration-200 ${
              enabled ? "translate-x-5 bg-white" : "translate-x-0.5 bg-gray-400/70 "
            } inline-block w-3 h-3 transform  rounded-full`}
          />
        </button>
        <label className="pl-2">Invert Colors</label>
      </div>
      <br />
      <div>Direction</div>
      <div className="">
        <div className="">
          <input
            className="w-4 h-4 focus:outline-none focus:ring"
            type="radio"
            id="leftRadio"
            onChange={setPositionForLeft}
            autoComplete="off"
            checked={directionRadio.left}
          /> 
          <label className="pl-2" htmlFor="leftRadio">
          Left
        </label>
        </div>
        <div className="">
          <input
            className="w-4 h-4 focus:outline-none focus:ring"
            type="radio"
            id="topRadio"
            onChange={setPositionForTop}
            autoComplete="off"
            checked={directionRadio.top}
          />
          <label className="pl-2" htmlFor="topRadio">
          Top
        </label>
        </div>
      </div>
    </div>
  );
};

export default GraidentBackground;
