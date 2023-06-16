    import React from "react";
    import './DashBoard.css';
    import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
    
   
   

    const DashBoard = (props)=>{

        const {
            variant = 'DashBoard1',
            p='p-tag',
            h4='h4-tag1',
            span='span-1',
            h5='h5-tag1',
            svg='svg-1',
            lable='ACTIVE PORTFOLIO',
            h4word="90",
            spanword='/120',
            h5word='2 New portfolio created today',
            iconDiv ='iconDiv-1',
            icon=<WorkOutlineOutlinedIcon fontSize="large" />,
            
            
            
            
    

            ...rest


        } =props


        return(

     
            <div className={variant}  {...rest}>

                <div >  
                    <p className={p}>{lable} </p>

                    <h4 className={h4}  >
                       {h4word} <span  className={span}>{spanword}</span></h4>
               
                  <h5 className={h5}>{h5word}</h5>

                    </div>
                                                   
                <div className={svg} >  

                <svg width="50" height="50"   >
                    <circle  cx="25" cy="25" r="25"  > 
                    </circle>  </svg>

                      <div className={ iconDiv}  >
                      {icon }
                      </div>
                      


                </div>
              
                    
            </div>
            
    
        )



    }

    export default DashBoard