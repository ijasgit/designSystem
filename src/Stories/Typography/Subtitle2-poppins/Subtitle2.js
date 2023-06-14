import React from 'react'
import "./Subtitle2.css"

const Subtitle2 = (props) => {
    const {
        variant = "primary",
        label = "SUBTITLE1-POPPINS",
        fontFamily = "Poppins",
        fontSize = 12,
        fontWeight = 400,
        letterSpacing = 0,
        lineHeight = "auto",
        ...rest
      } = props;
  return (
    <div style={{ fontFamily: fontFamily, fontSize: fontSize, letterSpacing: letterSpacing,
        lineHeight: lineHeight,fontWeight:fontWeight, ...rest}}>
        {label}
      </div>
  )
}

export default Subtitle2