import React from "react";
import "../../NavBar/NavBar.css";
import { useSelector } from "react-redux";
import TabComp from "../../../Stories/Tabs/TabComp";

const Software = () => {
  const data = useSelector((state) => state.software.value);
  const Title= data[0].name

  return (
    <div>
      <div>
        {" "}
        <p style={{ margin: "27px 0px 36px 13px" }}>{Title}</p>
      </div>
      <div>
        <TabComp />
      </div>
    </div>
  );
};

export default Software;
