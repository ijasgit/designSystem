import React from "react";
import "./CreateNewPortfolio.css";
import "../../Components/NavBar/NavBar.css";
import image from "../../Components/NavBar/Image/port-icon.svg";
import AddBtn from "../Add button -create new member/AddBtn";
const CreateNewPortfolio = () => {

 
  return (
    <div>
      <div className="data-1">
        <div className="data-2">
        
          
          <img src={image} alt="logo"  className="img-1" />
              
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
