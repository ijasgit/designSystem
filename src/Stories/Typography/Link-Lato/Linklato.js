import React from 'react'
import './Linklato.css'

const Linklato =( props) => {

    const { 
      fontSize= 10,
      letterSpacing= 0,
      lineHight= 'auto',
      lable= "Link-Lato",
      fontFamily= 'Lato',
      fontWeight= 500,
      ...rest

    } =props

  return (
    <div 
    style = {{

          
        letterSpacing: letterSpacing ,
        lineHight:  lineHight,
        fontSize :fontSize,
        fontFamily:  fontFamily,
        fontWight: fontWeight,

      ...rest,
    }}
    >
      {lable}  
    </div>
  
  )
}

export default Linklato