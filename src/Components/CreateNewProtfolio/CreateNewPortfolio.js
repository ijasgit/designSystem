import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadingPoppins from "../../Stories/Typography/Heading-poppins/HeadingPoppins";
import SUBTITLE1 from "../../Stories/Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import { lightBlue } from "@mui/material/colors";
import LinkLato from "../../Stories/Typography/Link-Lato/LinkLato";
import Buttons from "../../Stories/Buttons/Buttons";
import "./CreateNewPortfolio.css";
import { TextareaAutosize } from "@mui/base";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../../Components/NavBar/NavBar.css";
import image from "../../Components/NavBar/Image/Rectangle.png";
import TextFields from "../../Stories/Text Fields/TextFields";
import AddBtn from "../Add button -create new member/AddBtn";
import { useSelector } from "react-redux";
const CreateNewPortfolio = () => {

  // const userList = useSelector ((state)=>state.users.value)



  const style = {
    position: "absolute",
    width: "878px",
    height: "460px",
    left: "217px",
    top: "130px",

    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: "5px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("e");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  return (
    <div>
      <div className="data-1">
        <div className="data-2">
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
  <AddBtn/>
        </div>
      </div>
      {/* <div>  {userList.map((user)=>{
               console.log(user)
              return <div>
                <h3>{user.name}</h3> 
                <h3>{user.status}</h3> 
                <h3>{user.date}</h3> 
                <h3>{user.manager}</h3> 
                
                </div> */}
      

      {/* }) }</div> */}
    </div>
  );
};

export default CreateNewPortfolio;
