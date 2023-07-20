import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NavBar.css";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import AddBtn from "../Add button -create new member/AddBtn";
//import Buttons from "../../Stories/Buttons/Buttons";
import Buttons from "../../Stories/Buttons/Buttons";
import { useSelector } from "react-redux";
import SearchBar from "../../Stories/Search Bar/SearchBar";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbShare2 } from "react-icons/tb";
import { HiSortDescending } from "react-icons/hi";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CircularProgress from "@mui/joy/CircularProgress";

const Home = () => {
  const [data, setData] = useState("");
  // console.log(propsEditData)
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const[userData,setUserdata] = useState()
  console.log(userData,"user data")

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/portfolio");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };
  const handleSave = async (data1) => {
    if (
      data1.name != "" &&
      data1.description != "" &&
      data1.status != "" &&
      data1.owner != ""
    ) {
      try {
        setData([]);
        const response = await axios.post("/api/portfolio", {
          data: data1,
        });
        // console.log(response);
        fetchPortfolio();
        // Handle the response from the server
      } catch (error) {
        console.error(error);
        // Handle any errors that occurred during the request
      }
      handleClose();
    } else {
      alert("please enter details");
    }
  };
 
  //call back  function

  const editRow = async (uuid) => {
    try {
      const response = await axios.get(`/api/portfolio?uuid=${uuid}`);
      console.log(response.data);
     setUserdata(response.data)
      handleOpen();
    } catch (error) {
      // Handle errors if any
      console.error("Error fetching data:", error);
    }
   

  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div>
        <div>
          <div>
            <p style={{ margin: "27px 0px 36px 13px" }}>Portfolio</p>
          </div>
          {loading ? (
            <div
              style={{
                display: "flex",

                justifyContent: "center",

                marginTop: "230px",
              }}
            >
              <CircularProgress size="lg" />
            </div>
          ) : data && data.length ? (
            <div style={{ direction: "flex" }}>
              <div style={{ display: "flex", columnGap: "12px"}}>
                <div style={{ marginLeft: "30px" }}>
                  <SearchBar
                    backgroundColor="#f3f3f3"
                    borderRadius="4px"
                    fontSize={15}
                    height="30px"
                    placeholder="Search"
                    varient="small"
                    width="250px"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    columnGap: "12px",
                    marginLeft: "600px",
                  }}
                >
                  <GiSettingsKnobs className="icon" />
                  <HiSortDescending className="icon" />
                  <TbShare2 className="icon" />
                </div>
                <div>
                  <Buttons
                    label="Add Portfolio"
                    variant="primary"
                    onClick={handleOpen}
                    className="home-page-btn1"
                  />
                </div>
              </div>
              <DataTable data={data} editRow={editRow}  />
            </div>
          ) : (
            <CreateNewPortfolio
              handleSave={handleSave}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          )}
        </div>
        <AddBtn
          open={open}
          handleSave={handleSave}
          handleClose={handleClose}
          userData={userData}
         
        />
      </div>
    </div>
  );
};

export default Home;
