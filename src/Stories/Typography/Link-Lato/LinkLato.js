import React from 'react'
import './LinkLato.css'


const LinkLato =( props) => {

    const { 
      fontSize= 10,
      letterSpacing= 0,
      lineHeight= 'auto',
      lable= "Link-Lato",
      fontFamily= 'Lato',
      fontWeight= 500,
      ...rest

    } =props

  return (
    <div 
    style = {{

          
        letterSpacing: letterSpacing ,
        lineHeight:  lineHeight,
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

export default LinkLato