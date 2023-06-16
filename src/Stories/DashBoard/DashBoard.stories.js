import './DashBoard.css';
import DashBoard from './DashBoard';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';



export default {

    title :'dashboard/DashBoard',
    component:DashBoard,
    tags:['autodocs']
}

export const DashBoard1 ={
    args : {
        variant : 'DashBoard1',
        p:'p-tag',
        h4:'h4-tag1',
        span:'span-1',
        h5:'h5-tag1',
        svg:'svg-1',
        lable:'ACTIVE PORTFOLIO',
        h4word:"90",
        spanword:'/ 120',
        h5word:'2 New portfolio created today',
        iconDiv:'iconDiv-1',
        icon:<WorkOutlineOutlinedIcon sx={{ fontSize:"35px" }}/> 
        
       
      
       
    }

}

export const DashBoard2 ={
    args:{
        variant:'DashBoard2',
        h4word:'02',
        spanword:'/ 90',
        lable:'PORTFOLIO AT RISK',
        h5word:'5 Portfolio are on verge of getting risky',
        h5:'h5-tag2',
        svg:'svg-2',
        iconDiv:'iconDiv-2',
        icon :<ReportGmailerrorredOutlinedIcon  sx={{ fontSize:"35px" }}/>
       
      
    }
}