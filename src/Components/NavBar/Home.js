import React from "react";
import "./NavBar.css";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
const Home = () => {
  return (
    <>
      <div className="main-div">
        <SideNav />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavBar />
          <div> <h4 style={{    margin: "27px 0px 36px 13px"}}>Portfolio</h4></div>
         
          <CreateNewPortfolio /> {/* body & button-popup */}
        </div>
      </div>
    </>
  );
};

export default Home;
