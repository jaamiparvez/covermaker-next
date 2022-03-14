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
      <div className="mb-4">Type</div>
      <div
        className="flex flex-row rounded-md mb-8"
        role="group"
      
      >
        <div className="">
        <input
          type="radio"
          className="sr-only peer focus:outline-none focus:ring focus:ring-violet-300"
          name="btnradio"
          id="Solid"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Solid" ? true : false}
        />
        <label className="peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white 
        border border-r-0 border-gray-500 rounded-l-md px-4 py-2 mx-0 focus:outline-none focus:ring focus:ring-violet-300 " htmlFor="Solid">
          Solid
        </label>
        </div>
        <div>
        <input
          type="radio"
          className="sr-only peer"
          name="btnradio"
          id="Gradient"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Gradient" ? true : false}
        />
        <label className="peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white
         border border-gray-500  px-4 py-2 mx-0 outline-none focus:ring" htmlFor="Gradient">
          Gradient
        </label>
        </div>
        <div>
        <input
          type="radio"
          className="sr-only peer"
          name="btnradio"
          id="Image"
          autoComplete="off"
          onChange={changeType}
          checked={type === "Image" ? true : false}
        />
        <label className="peer-checked:bg-gray-500 peer-checked:text-white bg-white text-gray-500 hover:bg-gray-500 hover:text-white border border-l-0 border-gray-500 rounded-r-md px-4 py-2 mx-0  focus:ring" htmlFor="Image">
          Image
        </label>
        </div>
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
