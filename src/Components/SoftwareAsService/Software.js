import React from "react";
import "../NavBar/NavBar.css";
import SideNav from "../NavBar/SideNav";
import NavBar from "../SoftwareAsService/NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import { useSelector } from "react-redux";
import TabComp from "../../Stories/Tabs/TabComp";

const Software = () => {
  const data = useSelector((state) => state.users.value);

  return (
    <div>
      <div>
        {" "}
        <p style={{ margin: "27px 0px 36px 13px" }}>Software_As_Service</p>
      </div>
      <div>
        <TabComp />
      </div>
    </div>
  );
};

export default Software;
