    import React from "react";
    import './DashBoard.css';
    // import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
    import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
    
   
   

    const DashBoard = (props)=>{

        const {
            variant='DashBoard2',
        p='p-tag',
        h4word='02',
        h4='h4-tag1',
        span='span-1',
        spanword='/ 90',
        lable='PORTFOLIO AT RISK',
        h5word='5 Portfolio are on verge of getting risky',
        h5='h5-tag2',
        svg='svg-2',
        iconDiv='iconDiv-2',
        icon =<ReportGmailerrorredOutlinedIcon  fontSize='large'/>,
            
            
            
    

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