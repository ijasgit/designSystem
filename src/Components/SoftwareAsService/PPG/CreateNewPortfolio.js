import React,{useRef} from "react";
import "./CreateNewPortfolio.css";
import "../../../Components/NavBar/NavBar.css";
import image from "../../../Components/NavBar/Image/port-icon.svg";
import AddBtn from "../PPG/AddBtn";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
const CreateNewPortfolio = () => {
const childRef=useRef()



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
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("e");

  return (
    <div>
      <div className="soft-1">
        <div className="soft-2">
        <img src={image} alt="logo"  className="img-2" />

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
                paddingTop: "3px",
                left: "546px",
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
