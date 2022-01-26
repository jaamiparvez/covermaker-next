import React, { useState, useEffect, useContext } from "react";
import SolidBackground from "./SolidBackground";
import GradientBackground from "./GradientBackground";
import ImageBackground from "./ImageBackground";

const BackgroundProperties = () => {
  const [type, setType] = useState("");

  useEffect(() => {
    return setType((prev) => {
      return prev;
    });
  });
  const changeType = (e) => {
    setType(e.target.id);
  };

  return (
    <div>
      <div className="row g-0">Type</div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="Solid"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Solid" ? true : false}
        />
        <label className="btn btn-outline-secondary" htmlFor="Solid">
          Solid
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="Gradient"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Gradient" ? true : false}
        />
        <label className="btn btn-outline-secondary" htmlFor="Gradient">
          Gradient
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="Image"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Image" ? true : false}
        />
        <label className="btn btn-outline-secondary" htmlFor="Image">
          Image
        </label>
      </div>
      <div className="row g-0">
        {type === "Solid" && <SolidBackground />}
        {type === "Gradient" && <GradientBackground />}
        {type === "Image" && <ImageBackground />}
      </div>
    </div>
  );
};

export default BackgroundProperties;
