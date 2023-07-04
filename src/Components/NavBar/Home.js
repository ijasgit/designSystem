import React from "react";
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
    <div>
      <div>
        <p style={{ margin: "27px 0px 36px 13px" }}>Portfolio</p>
      </div>
      {data && data.length ? (
        <div>
          <DataTable />
        </div>
      ) : (
        <CreateNewPortfolio />
      )}
    </div>
  );
};

export default Home;
