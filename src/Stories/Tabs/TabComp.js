import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TitlePoppins from "../../Stories/Typography/Tiltle-poppins/TitlePoppins";

const TabComp = (props) => {

  const{width="100%",height="", label1="PPG",label2="Strategic outcome",label3="Finance", ...rest}=props
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width, typography: "body1" ,backgroundColor:"white" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ style: { backgroundColor: "#1976d2" } }}
            >
              <Tab
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
        </TabContext>
      </Box>
    </div>
  );
};



export default TabComp;
