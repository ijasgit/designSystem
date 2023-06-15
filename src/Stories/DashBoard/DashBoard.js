import React from "react";
import './DashBoard.css'

const DashBoard = (props)=>{

    const {
        variant = 'DashBoard1',
        fontFamily='Poppins',

        ...rest




    } =props





    return(


        <>

        <div className={variant} style={{fontFamily}} {...rest}>
            <h3>
                ACTIVE PORTFOLIOS
                </h3>
            


        </div>
        
        
        </>
    )



}

export default DashBoard