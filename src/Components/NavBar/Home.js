import React, { useState } from "react";
import "./NavBar.css";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import { useSelector } from "react-redux";
const Home = () => {
  const useselector=useSelector((state=>state.users))
  console.log("use",useselector)

  const isData=((useselector.length)<=0)
  console.log(isData,"isdata")
  // if(useselector.length==0){
  //   console.log("true")
  //   setData(false)
  // }
  // else{
  //   setData(true)
  // }

  return (
    <>
      <div className="main-div">
        <SideNav />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavBar />
          <div> <h4 style={{    margin: "27px 0px 36px 13px"}}>Portfolio</h4></div>
         
          {/* <CreateNewPortfolio /> body & button-popup */}
         {isData?<CreateNewPortfolio/>:<DataTable/>} 
        </div>
      </div>
    </>
  );
};

export default Home;
