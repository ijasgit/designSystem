import React from "react";
import "./NavBar.css";
import image from "./Image/Rectangle.png";
import Buttons from "../../Stories/Buttons/Buttons";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CreateNewProtfolio  from "../../Stories/CreateNewProtfolio/CreateNewPortfolio"

const HomeBody = () => {
  return (
    <>
      <div className="data-1">
        <img src={image} alt="logo" id="img-1" />

        <p id="p-2">No Part A financial Data avaliable</p>
        <p id="p-3">
          You might Lorem ipsum dolor consectetur adipiscing elite,sed dolor
          <br />
          <span id="span-3">
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </p>
        <br />
        <div className="btn-1">
          <Buttons label="Add Portfolio" variant="primary" />
          <AddOutlinedIcon
            className="addout-1"
            fontSize="small"
          ></AddOutlinedIcon>
          {/* <CreateNewProtfolio /> */}
        </div>
   
      </div>
    </>
  );
};

export default HomeBody;
