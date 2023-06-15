import React from "react";
import './Card.css'

const Card = ( props) =>{

    const {
        variant ='primaryCard',
        lable= 'Task 1 : Onboarding Research',
        height="70px",
        width ='273px',
        backgroundColor= '#ECFBF2',
        borderRadius= '3px',
       
   
    ...rest
     

    } =props ;


    return (
        

             <div className= {variant} style={{
                height,
                width,
                borderRadius,
                backgroundColor }} {...rest}>

            <p> {lable} </p>    
             
           </div>

    
       
    )

} 

export default Card