import React from 'react'
import "/home/oem/Documents/archimedis/design/src/Typography/Button 2 -poppins/Button2Poppins.css"
const Button2Poppins = (props) => {
    const {
        variant = "primary",
        label = "Button 2-poppins",
        fontFamily = "Poppins",
        fontSize = 9,
        fontWeight = 500,
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
  )
}

export default Button2Poppins