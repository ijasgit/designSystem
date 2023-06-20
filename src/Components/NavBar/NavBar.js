import React from 'react';
import './NavBar.css';
// import Container from 'react-bootstrap/Container';
import SearchBar from '../../Stories/Search Bar/SearchBar';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import {FaChartPie}  from 'react-icons/fa';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import HomeBody from './HomeBody';
 



const NavBar = () => {
  return (
    <>
     <div className='container'>

    <div className='main-div'>

    <div className='side-div'>
        <ViewInArTwoToneIcon className='cube-icon'/>
       
       <FaChartPie className='pie-chart'/>
       < ShoppingBagOutlinedIcon className='shopping-icon'/>
       <EmojiObjectsOutlinedIcon className='bulb-icon'/>
       <LocalActivityOutlinedIcon  className='ticket-icon'/>
       <GroupsOutlinedIcon className='group-icon'/>
       <BadgeTwoToneIcon className='batch-icon'/>
       <BuildTwoToneIcon  className='build-sharp'/>

     
       
       
      

    </div>

    <div className='nav-bar'>

        <p id='pot-1'> <LibraryBooksOutlinedIcon className='library-icon'/>Portfolio Management <span id='span-1'> / Portfolio</span> <span id='span-2'><SearchBar
          backgroundColor="#f3f3f3"
          borderRadius="4px"
          fontSize={15}
          height="22px"
          placeholder="Search"
          varient="small"
           width="125px"
         /></span> <span id='span-4'>   <NotificationsTwoToneIcon /> </span> </p> 
           

    </div>
       
       <h4 className='heading-1'> Portfolio</h4> 

       <HomeBody/>


   

    </div>



    </div>

 


    </>












    
  )
}

export default NavBar