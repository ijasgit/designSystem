import React from "react";
import "./Caption1Lacto.css";

const Caption1Lacto = (props) => {
  const {
    variant = "primary",
    label = "Caption1-Popins",
    fontFamily = "Lato",
    fontSize = 9,
    fontWeight = 400,
    letterSpacing = 2,
    lineHeight = "auto",
    ...rest
  } = props;
  return (
    <div
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        ...rest,
      }}
    >
      {label}
    </div>
  );
};

export default Caption1Lacto;
