import React, { useState, useContext, useEffect, useRef } from "react";
import { fabric } from "fabric";
import FontFaceObserver from "fontfaceobserver";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp, setActiveStyle } from "../libs/utils";

const FontFamily = (props) => {
  const { canvas, activeObject } = useContext(FabricContext);

  const fonts = ["Times New Roman", "Merriweather", "Roboto"];
  const [options, setOptions] = useState({});
  const selectRef = useRef();

  //should I load fonts using fetch?
  //   useEffect(async () => {
  //     const response = await fetch(
  //       "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCM0xQwqkIF9lmGUKXqMBr3RG91Q6teCpg"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   });

  //not working fontfaceobserver
  // useEffect(() => {
  //   fonts.map((font) =>
  //     new FontFaceObserver(font)
  //       .load(5000)
  //       .then(function () {
  //         {
  //           console.log("font loaded");
  //           fonts.map((font) => {
  //             return <option key={font}>{font}</option>;
  //           });
  //         }
  //       })
  //       .catch(function () {
  //         console.log("font not loaded");
  //       })
  //   );
  // }, []);

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        fontFamily: getActiveStyle("fontFamily", activeObject),
      };
      setOptions({ ...options, ...activeOptions });
    }
  }, [activeObject]);

  const handleFontChange = (e) => {
    //works
    // setOptions({
    //   ...options,
    //   fontFamily: e.target.value,
    // });
    // setActiveProp("fontFamily", e.target.value, activeObject, canvas);
    //test
    setOptions({
      ...options,
      fontFamily: e.target.value,
    });
    if (e.target.value !== "Times New Roman") {
      let newFont = new FontFaceObserver(e.target.value);
      console.log(options);
      newFont
        .load()
        .then(function () {
          setActiveProp("fontFamily", e.target.value, activeObject, canvas);
        })
        .catch(function (e) {
          console.log("Error Loading fonts", e);
        });
    } else {
      setActiveProp("fontFamily", e.target.value, activeObject, canvas);
    }
  };

  return (
    <div>
      <label className="row g-0">Font Family</label>
      <div className="row g-0">
        <div className="col-md-10 ">
          <select
            ref={selectRef}
            className="form-select input-small w-100 position-relative"
            onChange={handleFontChange}
            value={options.fontFamily}
            autoComplete="off"
          >
            {fonts.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default FontFamily;
