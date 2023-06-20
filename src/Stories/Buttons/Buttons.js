import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
  const { variant = "primary", label="Primary",opacity=1,onClick, ...rest } = props;
  return (
    <div>
      <button className={variant} onClick={onClick}>{label}</button>
    </div>
  );
};

export default Buttons;
