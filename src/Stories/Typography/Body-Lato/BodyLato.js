import React from 'react'
import "./BodyLato.css"
const BodyLato = (props) => {
    const {
        variant = "primary",
        label = "Body-Lato",
        fontFamily = "Lato",
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

export default BodyLato