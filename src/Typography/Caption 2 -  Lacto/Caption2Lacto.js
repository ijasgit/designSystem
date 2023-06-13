import React from "react";
import "/home/oem/Documents/archimedis/design/src/Typography/Caption 2 -  Lacto/Caption2Lacto.css";

const Caption2Lacto = (props) => {
  const {
    variant = "primary",
    label = "Caption2-Lato",
    fontFamily = "Lato",
    fontSize = 8,
    fontWeight = 400,
    letterSpacing = 1,
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

export default Caption2Lacto;
