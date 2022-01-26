import React, { useState, useEffect, useContext, useRef } from "react";
import { fabric } from "fabric";
import { FabricContext } from "../context/FabricContext";

const ImageBackground = () => {
  const { canvas } = useContext(FabricContext);

  const [showRemove, setShowRemove] = useState();
  const inputRef = useRef();

  useEffect(() => {
    canvas.backgroundImage === null
      ? setShowRemove(false)
      : setShowRemove(true);
  }, [canvas.backgroundImage]);

  function fileToDataURI(file, callback) {
    // Create a new instance of the Image class
    var img = new Image();

    img.src = file;
    // When the image loads, set it as background image
    img.onload = function () {
      var fabricImage = new fabric.Image(img);
      callback(fabricImage);
    };
  }

  function changeBackgroundImage(e) {
    //Make sure user uploads a file
    if (e.target.files[0]) {
      fileToDataURI(
        URL.createObjectURL(e.target.files[0]),
        function (fabricImage) {
          canvas.setBackgroundImage(
            fabricImage,
            function () {
              // canvas.requestRenderAll();
              canvas.renderAll.bind(canvas)();
            },
            {
              width: canvas.width,
              height: canvas.height,
            }
          );
        }
      );
    }
    //canvas.requestRenderAll();
  }

  function removeBackgroundImage() {
    inputRef.current.value = "";
    canvas.backgroundImage = null;
    setShowRemove(false);
    canvas.renderAll();
  }
  return (
    <div className="row g-0 box-border">
      <label className="form-label" htmlFor="img">
        Choose Background Image
      </label>
      <input
        ref={inputRef}
        className="form-control"
        type="file"
        accept="image/*"
        id="img"
        onChange={(e) => {
          changeBackgroundImage(e);
          setShowRemove(!showRemove);
        }}
      ></input>
      {showRemove && (
        <button
          onClick={removeBackgroundImage}
          type="button"
          className="btn btn-light"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ImageBackground;
