import React from "react";
import "./ThemeSwitch.css";

function ThemeSwitch(props) {
  return (
    <div className="themeSwitch">
      <div>
        <div className="themeSwitchText">Switch to </div>
        <button className="themeSwitchButton" onClick={props.switchTheme}>
          {props.theme === "Dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
