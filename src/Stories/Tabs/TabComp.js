import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useSelector } from "react-redux";
import DataTable from "../../Components/SoftwareAsService/PPG/DataTable"
import TitlePoppins from "../../Stories/Typography/Tiltle-poppins/TitlePoppins";
// import CreateNewPortfolio from "../../Components/CreateNewProtfolio/CreateNewPortfolio";
import CreateNewPortfolio from "../../Components/SoftwareAsService/PPG/CreateNewPortfolio";
import CreateNewPortfolio1 from "../../Components/SoftwareAsService/Stratagic outcome/CreateNewPortfolio";
import DataTable1 from "../../Components/SoftwareAsService/Stratagic outcome/DataTable";
import { useDispatch } from "react-redux";
import { addLabel } from "../../Components/Featuers/RoutesLabelSlice";



const TabComp = (props) => {
  const data = useSelector((state) => state.users.value);
  const dispatch=useDispatch()

  const{width="100%",height="", label1="PPG",label2="Strategic outcome",label3="Finance", ...rest}=props
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabName=(label)=>{

const tabName=label
dispatch(
  addLabel({
  name: tabName
  })
);
  }
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
              onClick={()=>getTabName(label1)}
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
              onClick={()=>getTabName(label2)}
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
              onClick={()=>getTabName(label3)}
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
                onClick={()=>getTabName(label3)}
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
          <div >
            <DataTable  />
          </div>
        ) : (
            <CreateNewPortfolio/>
        )}</TabPanel>
        <TabPanel value="2">{data && data.length ? (
          <div>
            <DataTable1 />
          </div>
        ) : (
          <CreateNewPortfolio1 />
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
