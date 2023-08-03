import React, { useEffect, useState } from "react";
import Mode from "./Mode";

interface propsType {
  toggleMode: boolean;
  setToggleMode: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopHeader: React.FC<propsType> = (props) => {
  const toggleMode = props.toggleMode;
  const setToggleMode = props.setToggleMode;
  const setDisplay = props.setDisplay;

  return (
    <div
      id="top-h-cnt"
      className={toggleMode ? "child-light" : "child-dark"}
      onClick={() => setDisplay((display) => (display = false))}
    >
      <div id="top-header">
        <p id="intro" className="top-header">
          Where in the world?
        </p>
        <Mode setToggleMode={setToggleMode} toggleMode={toggleMode} />
      </div>
    </div>
  );
};
export default TopHeader;
