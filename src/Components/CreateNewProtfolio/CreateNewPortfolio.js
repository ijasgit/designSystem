import React from "react";
import { useRef } from "react";
import "./CreateNewPortfolio.css";
import "../../Components/NavBar/NavBar.css";
import image from "../../Components/NavBar/Image/port-icon.svg";
import AddBtn from "../Add button -create new member/AddBtn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const CreateNewPortfolio = () => {
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
            <AddBtn ref={childRef} />
            <div
              style={{
                position: "absolute",

                left: "538px",
                cursor: "pointer",
              }}
              onClick={()=>childRef.current.handleOpen()}
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
