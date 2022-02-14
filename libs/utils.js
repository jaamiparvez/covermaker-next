export const getActiveStyle = (styleName, activeObject) => {
  if (!activeObject) {
    return "";
  }
  return activeObject.getSelectionStyles && activeObject.isEditing
    ? activeObject.getSelectionStyles()[styleName] || ""
    : activeObject[styleName] || "";
};

export const setActiveStyle = (styleName, value, activeObject) => {
  if (!activeObject) {
    return;
  }

  if (activeObject.setSelectionStyles && activeObject.isEditing) {
    let style = {};
    style[styleName] = value;
    activeObject.setSelectionStyles(style);
    activeObject.setCoords();
  } else {
    activeObject.set(styleName, value);
  }

  activeObject.setCoords();
  activeObject.canvas.renderAll();
};

export const getActiveProp = (name, activeObject) => {
  if (!activeObject) {
    return "";
  }
  return activeObject[name] || "";
};

export const setActiveProp = (name, value, activeObject, canvas) => {
  //try passing canvas in the function to renderAll instead of activeObject._objects[1].canvas.renderAll(); // works but slow ??
  if (!activeObject) {
    return;
  }
  if (activeObject._objects) {
    console.log("_objects exist");
    activeObject._objects[0].set(name, value).setCoords();
    activeObject._objects[1].set(name, value).setCoords();
    canvas.requestRenderAll();
    // activeObject._objects[1].canvas.renderAll();
  } else {
    activeObject.set(name, value).setCoords();
    activeObject.canvas.renderAll();
  }
};
