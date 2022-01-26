import React, { useState, useEffect, useContext } from "react";
import { FabricContext } from "../context/FabricContext";
import { getActiveStyle, setActiveProp, setActiveStyle } from "../libs/utils";

const FontStyle = () => {
  const { canvas, activeObject } = useContext(FabricContext);

  const [options, setOptions] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "normal",
  });

  useEffect(() => {
    if (activeObject) {
      const activeOptions = {
        fontWeight: getActiveStyle("fontWeight", activeObject),
        fontStyle: getActiveStyle("fontStyle", activeObject),
        textDecoration: getActiveStyle("textDecoration", activeObject),
      };
      setOptions({ ...options, ...activeOptions });
    }
  }, [activeObject]);

  const updateFontSize = (e) => {
    setOptions({
      ...options,
      fontSize: e.target.value,
    });
    setActiveProp("fontSize", e.target.value, activeObject, canvas);
  };

  const updateBold = (e) => {
    const value = options.fontWeight === "bold" ? "normal" : "bold";
    setOptions({
      ...options,
      fontWeight: value,
    });
    setActiveStyle("fontWeight", value, activeObject);
  };

  const updateItalic = (e) => {
    const value = options.fontStyle === "italic" ? "normal" : "italic";
    setOptions({
      ...options,
      fontStyle: value,
    });
    setActiveStyle("fontStyle", value, activeObject);
  };

  const updateUnderline = (e) => {
    const value = options.textDecoration === "underline" ? "" : "underline";

    setOptions({
      ...options,
      textDecoration: value,
    });
    setActiveStyle("textDecoration", value, activeObject);
    setActiveStyle("underline", !!value.length, activeObject);
  };

  return (
    <div>
      <div className="row g-0">
        <div className="row g-0">Font Style</div>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <input
            type="checkbox"
            className="btn-check"
            name="bold"
            id="bold"
            autoComplete="off"
            onChange={updateBold}
            checked={options.fontWeight === "bold" ? true : false}
          />
          <label className="btn btn-outline-secondary fw-bolder" htmlFor="bold">
            B
          </label>
          <input
            type="checkbox"
            className="btn-check"
            name="underline"
            id="underline"
            autoComplete="off"
            onChange={updateUnderline}
            checked={options.textDecoration === "underline" ? true : false}
          />
          <label
            className="btn btn-outline-secondary text-decoration-underline"
            htmlFor="underline"
          >
            U
          </label>
          <input
            type="checkbox"
            className="btn-check"
            name="options-outlined"
            id="italics"
            autoComplete="off"
            onChange={updateItalic}
            checked={options.fontStyle === "italic" ? true : false}
          />
          <label
            className="btn btn-outline-secondary  fst-italic"
            htmlFor="italics"
            style={{ fontFamily: "Serif" }}
          >
            I
          </label>
        </div>
      </div>
    </div>
  );
};

export default FontStyle;
