import React, { useState } from "react";
import "./NavBar.css";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import { useSelector } from "react-redux";
const Home = () => {
  const data = useSelector((state) => state.users.value);
  //const data = []
  //console.log("use", data);

  // const isData=((useselector.length)<=0)
  // console.log(isData,"isdata")

  return (
  
      <div className="main-div">
        <SideNav />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavBar />
          <div>
            {" "}
            <h4 style={{ margin: "27px 0px 36px 13px" }}>Portfolio</h4>
          </div>

          {/* <CreateNewPortfolio /> body & button-popup */}
          {data && data.length ?  <div><DataTable /></div> : <CreateNewPortfolio /> }
         
        </div>
      </div>
  
  );
};

export default Home;
