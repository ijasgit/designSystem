import React from "react";
import { FaChartPie } from "react-icons/fa";
import { RiLineChartLine, RiSettings5Fill } from "react-icons/ri";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BuildTwoToneIcon from "@mui/icons-material/BuildTwoTone";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import { IoIosCube } from "react-icons/io";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import { TbSteeringWheel } from "react-icons/tb";
import "./NavBar.css";

const SideNav = () => {
  return (
    <>
      <div className=" col1">
        <div className="side-div">
          <IoIosCube className="cube-icon" />
          <FaChartPie className="pie-chart" />
          <ShoppingBagOutlinedIcon className="shopping-icon" />
          <EmojiObjectsOutlinedIcon className="bulb-icon" />
          <LocalActivityOutlinedIcon className="ticket-icon" />
          <GroupsOutlinedIcon className="group-icon" />
          <BadgeTwoToneIcon className="batch-icon" />
          <BuildTwoToneIcon className="build-sharp" />
          <QuestionAnswerTwoToneIcon className="question-icon" />
          <RiLineChartLine className="Riline-icon" />
          <RiSettings5Fill className="RiSetting-icon" />
          <TbSteeringWheel className="steering-icon" />
        </div>
      </div>
    </>
  );
};

export default SideNav;
