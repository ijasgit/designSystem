import React from 'react';
import { FaChartPie } from "react-icons/fa";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BuildTwoToneIcon from "@mui/icons-material/BuildTwoTone";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import ViewInArTwoToneIcon from "@mui/icons-material/ViewInArTwoTone";
import "./NavBar.css";

const SideNav = () => {
  return (
    <>

<      div className=" col1">

          <div className='side-div'>     

            <ViewInArTwoToneIcon className="cube-icon" />
            <FaChartPie className="pie-chart" />
            <ShoppingBagOutlinedIcon className="shopping-icon" />
            <EmojiObjectsOutlinedIcon className="bulb-icon" />
            <LocalActivityOutlinedIcon className="ticket-icon" />
            <GroupsOutlinedIcon className="group-icon" />
            <BadgeTwoToneIcon className="batch-icon" />
            <BuildTwoToneIcon className="build-sharp" />
          </div>

        </div>
    
    
    
    
    </>





  )
}

export default SideNav