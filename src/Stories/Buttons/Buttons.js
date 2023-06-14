import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const { variant = "primary", label="Primary", ...rest } = props;
  return (
    <div>
      <button className={variant}>{label}</button>
    </div>
  );
};

export default Buttons;
