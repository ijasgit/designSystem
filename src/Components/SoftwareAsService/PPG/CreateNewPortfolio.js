import React from "react";
import "./CreateNewPortfolio.css";
import "../../../Components/NavBar/NavBar.css";
import image from "../../../Components/NavBar/Image/port-icon.svg";
import AddBtn from "../PPG/AddBtn";
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
          <div ><AddBtn/></div>
  
        </div>
      </div>
      
    </div>
  );
};

export default CreateNewPortfolio;
