import React from "react";
import "./HeadingPoppins.css";

const HeadingPoppins = (props) => {
  const {
    variant = "primary",
    label = "Heading-Poppins",
    fontFamily = "Poppins",
    fontSize = 24,
    fontWeight = 600,
    letterSpacing = 0,
    lineHeight = "auto",
    ...rest
  } = props;

  return (
    <div style={{ fontFamily: fontFamily, fontSize: fontSize, letterSpacing: letterSpacing,
      lineHeight: lineHeight,fontWeight:fontWeight , ...rest}}>
      {label}
    </div>
  );
};

export default HeadingPoppins;
