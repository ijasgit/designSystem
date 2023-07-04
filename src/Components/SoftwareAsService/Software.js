import React from 'react'
import "../NavBar/NavBar.css";
import SideNav from "../NavBar/SideNav";
import NavBar from "../NavBar/NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import { useSelector } from "react-redux";
import TabComp from '../../Stories/Tabs/TabComp';

const Software = () => {
  const data = useSelector((state) => state.users.value);

  return (
    <div className="main-div">
      <SideNav />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        <div>
        <div>
          {" "}
          <h4 style={{ margin: "27px 0px 36px 13px" }}>Software_As_Service</h4>
        </div>
        <div><TabComp /></div>
        {/* {data && data.length ? (
          <div>
            <DataTable />
          </div>
        ) : (
          <CreateNewPortfolio />
        )} */}
        </div>
      </div>
    </div>
  )
}

export default Software