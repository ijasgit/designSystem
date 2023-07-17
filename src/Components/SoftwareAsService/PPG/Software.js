import React from "react";
import "../../NavBar/NavBar.css";
import { useSelector } from "react-redux";
import TabComp from "../../../Stories/Tabs/TabComp";
import NavBar from "../../NavBar/NavBar";

const Software = () => {
  const data = useSelector((state) => state.software.value);
  const tabName = useSelector((state) => state.routeLabel.value[0].name);


  const Title = data[0].name;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar tabName={tabName} />
      <div>
        <div>
          <p style={{ margin: "27px 0px 36px 13px" }}>{Title}</p>
        </div>
        <div>
          <TabComp />
        </div>
      </div>
    </div>
  );
};

export default Software;
