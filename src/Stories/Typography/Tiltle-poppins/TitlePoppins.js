import React from 'react'
import "/home/oem/Documents/archimedis/design/src/Stories/Typography/Tiltle-poppins/TitlePoppins.css"

const TitlePoppins = (props) => {
    const {
        variant = "primary",
        label = "Title-Poppins",
        fontFamily = "Poppins",
        fontSize = 16,
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

export default TitlePoppins