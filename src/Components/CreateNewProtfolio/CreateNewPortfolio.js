import React from "react";
import { useRef } from "react";
import "./CreateNewPortfolio.css";
import "../../Components/NavBar/NavBar.css";
import image from "../../Components/NavBar/Image/port-icon.svg";
import AddBtn from "../Add button -create new member/AddBtn";
import Buttons from "../../Stories/Buttons/Buttons";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const CreateNewPortfolio = ({handleSave, handleOpen, open, handleClose}) => {
const childRef=useRef()
  return (
    <div>
      <div className="data-1">
        <div className="data-2">
          <img src={image} alt="logo" className="img-1" />

          <p id="p-2">No Part A financial Data avaliable</p>
          <p id="p-3">
            You might Lorem ipsum dolor consectetur adipiscing elite,sed dolor
            <br />
            <span id="span-3">
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </p>
          <br />
          <div style={{ display: "flex", flexDirection: "row",justifyContent:"center",position:"relative"  }}>
          <div className="btn-1">
        <Buttons label="Add Portfolio" variant="primary" onClick={handleOpen} />
      </div>
            <AddBtn open={open} handleSave={handleSave} handleClose={handleClose}  />
            <div
              style={{
                position: "absolute",
                paddingTop: "3px",
                left: "538px",
                cursor: "pointer",
              }}
              // onClick={handleOpen}
            >
              <AddOutlinedIcon
                className="addout-1"
                fontSize="small"
              ></AddOutlinedIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPortfolio;
