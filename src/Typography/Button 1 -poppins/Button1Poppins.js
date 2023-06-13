import React from 'react'
import "/home/oem/Documents/archimedis/design/src/Typography/Button 1 -poppins/Button1Poppins.css"
const Button1Poppins = (props) => {
    const {
        variant = "primary",
        label = "Button 1-poppins",
        fontFamily = "Poppins",
        fontSize = 12,
        fontWeight = 600,
        letterSpacing = 0,
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

export default Button1Poppins