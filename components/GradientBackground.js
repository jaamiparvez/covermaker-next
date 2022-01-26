import React, { useState, useEffect, useContext, useRef } from "react";
import { fabric } from "fabric";
import { FabricContext } from "../context/FabricContext";
import { BackgroundContext } from "../context/BackgroundContext";

const GraidentBackground = () => {
  const { canvas } = useContext(FabricContext);
  const {
    startColor,
    setStartColor,
    endColor,
    setEndColor,
    directionRadio,
    setDirectionRadio,
  } = useContext(BackgroundContext);

  const startRef = useRef({});
  const endRef = useRef({});

  const [pos, setPos] = useState({});

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

  return (
    <div
      className="row g-0"
      style={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <br />
      <div className="row g-0">Start</div>
      <input
        type="color"
        ref={startRef}
        value={startColor}
        onChange={changeStartColor}
      />
      <br />
      <div className="row g-0">End</div>
      <input
        type="color"
        ref={endRef}
        value={endColor}
        onChange={changeEndColor}
      />
      <br />

      <div className="row g-0 form-check form-switch">
        <label
          className="form-check-label switch-inline"
          htmlFor="invertColors"
        >
          Invert Colors
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="invertColors"
          onChange={invertColors}
        />
      </div>
      <br />
      <div>Direction</div>
      <div className="row g-0">
        <div className="form-check">
          <label className="form-check-label" htmlFor="leftRadio">
            Left
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="leftRadio"
            onChange={setPositionForLeft}
            autoComplete="off"
            checked={directionRadio.left}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="topRadio">
            Top
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="topRadio"
            onChange={setPositionForTop}
            autoComplete="off"
            checked={directionRadio.top}
          />
        </div>
      </div>
    </div>
  );
};

export default GraidentBackground;
