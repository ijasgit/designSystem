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
import CircularProgress from "@mui/joy/CircularProgress";

const Home = () => {
  const [data, setData] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
      console.log(response.data, "working");
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };
  const handleSave = async (data1) => {
    try {
      setData([]);
      const response = await axios.post("/api/portfolio", {
        data: data1,
      });
      console.log(response);
      fetchPortfolio();
      // Handle the response from the server
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    }
    handleClose();
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
              <CircularProgress size="lg"/>
            </div>
          ) : data && data.length ? (
            <div>
              <Buttons
                label="Add Portfolio"
                variant="primary"
                onClick={handleOpen}
              />
              <DataTable data={data} />
            </div>
          ) : (
            <CreateNewPortfolio
              handleSave={handleSave}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          )}
        </div>
        <AddBtn open={open} handleSave={handleSave} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Home;
