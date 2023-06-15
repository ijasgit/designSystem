
import Card from "./Card"; 
import './Card.css'

export default {
    title : 'Cards/Card',
    component : Card ,
    tags :['autodocs']

}

export const primaryCard ={
   args:{
    variant :'primaryCard',
    lable:'Task 1: Onboarding Research',
    height:"70px",
    width :'273px',
    backgroundColor: '#ECFBF2',
    borderRadius: '3px',
   
   
   }
   
   
};

export const secondaryCard ={
    args :{
        variant:'secondaryCard',
        lable:'Task 2:Competitive Analysis',
        height:'50px',
        width :'500px',
        borderRadius: '5px',
    }
};