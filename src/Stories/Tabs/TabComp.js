import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useSelector } from "react-redux";
import DataTable from "../../Stories/Table/DataTable";
import TitlePoppins from "../../Stories/Typography/Tiltle-poppins/TitlePoppins";
import CreateNewPortfolio from "../../Components/CreateNewProtfolio/CreateNewPortfolio";
import SoftwareHome from "../../Components/SoftwareAsService/SoftwareHome";


const TabComp = (props) => {
  const data = useSelector((state) => state.users.value);

  const{width="100%",height="", label1="PPG",label2="Strategic outcome",label3="Finance", ...rest}=props
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width, typography: "body1" ,backgroundColor:"#F7FCFD" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ style: { backgroundColor: "#1976d2" } }}
            >
              <Tab
              value="1"
                label={
                  <TitlePoppins
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={0}
                    label={label1}
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                }
              />
              <Tab
              value="2"
                label={
                  <TitlePoppins
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={0}
                    label={label2}
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                }
              />
              <Tab
              value="3"
                label={
                  <TitlePoppins
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={0}
                    label={label3}
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                }
              />
                <Tab
                value="4"
                label={
                  <TitlePoppins
                    fontFamily="Poppins"
                    fontSize={12}
                    fontWeight={0}
                    label={label3}
                    letterSpacing={0}
                    lineHeight="18px"
                    variant="primary"
                  />
                }
              />
            </TabList>
          </Box>
          
          <TabPanel value="1" className="soft-1"> {data && data.length ? (
          <div  className="soft-1">
            <DataTable  />
          </div>
        ) : (
            <SoftwareHome/>
        )}</TabPanel>
        <TabPanel value="2">{data && data.length ? (
          <div>
            <DataTable />
          </div>
        ) : (
          <CreateNewPortfolio />
        )}</TabPanel>
        <TabPanel value="3">{data && data.length ? (
          <div>
            <DataTable />
          </div>
        ) : (
          <CreateNewPortfolio />
        )}</TabPanel>
        <TabPanel value="4">{data && data.length ? (
          <div>
            <DataTable />
          </div>
        ) : (
          <CreateNewPortfolio />
        )}</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};



export default TabComp;
