import React from 'react'
import "/home/oem/Documents/archimedis/design/src/Typography/SUBTITLE1-POPPINS/SUBTITLE1.css"

const SUBTITLE1 = (props) => {
    const {
        variant = "primary",
        label = "SUBTITLE1-POPPINS",
        fontFamily = "Poppins",
        fontSize = 12,
        fontWeight = 500,
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

export default SUBTITLE1