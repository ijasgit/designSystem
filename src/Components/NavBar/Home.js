import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NavBar.css";
import NavBar from "./NavBar";
import CreateNewPortfolio from "../CreateNewProtfolio/CreateNewPortfolio";
import DataTable from "../../Stories/Table/DataTable";
import AddBtn from "../Add button -create new member/AddBtn";
import Buttons from "../../Stories/Buttons/Buttons";
import SearchBar from "../../Stories/Search Bar/SearchBar";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbShare2 } from "react-icons/tb";
import CircularProgress from "@mui/joy/CircularProgress";
import { BsSortAlphaDownAlt,BsSortAlphaDown } from "react-icons/bs";


const Home = () => {
  const [data, setData] = useState("");
  // console.log (data)
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedData, seteditData] = useState();
  const [Ename, setEname] = useState("");
  // console.log(Ename,"ename got it")
  const [Edescription, setdescription] = useState("");
  // console.log(Edescription,"Edescription got it")
  const [Eportfolio_owner, setportfolio_owner] = useState("");
  // console.log(Eportfolio_owner,"Eportfolio_owner got it")
  const [Eportfolio_ownerName, setportfolio_ownerName] = useState("");
  const [Estatus, setstatus] = useState(false);
  // console.log(Estatus,"status got it")
  const [uuid, setuuid] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const[search,setsearch]=useState("")

  const handleSort = () => {
    setIsAscending((value)=>!value);
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (isAscending) {
        return b.name.localeCompare(a.name);
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setData(sortedData);
    
  };
 
  const handleOpen = () => {
    setOpen(true);
    if (Ename == null) {
      setEname("");
    }
  };
  const handleClose = () => {
    setOpen(false);
    setEname("");
    setdescription("");
    setuuid("");
    setportfolio_ownerName("")
    setportfolio_owner("");
    setstatus("")
    

  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setData([]);
      setLoading(true);
      const response = await axios.get("/api/portfolio");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };
  const handleSave = async (data1) => {
    setIsAscending(true)
    if (!uuid) {
      console.log("yes",data1)
     
        try {
          setData([]);
          const response = await axios.post("/api/portfolio", {
            data: data1,
          });
          fetchPortfolio();
          // Handle the response from the server
        } catch (error) {
          console.error(error);
          // Handle any errors that occurred during the request
        }
        handleClose();
      
    

      } 
     else {
      const response1 = await axios.put(`/api/put?id=${uuid}`, {
        name: Ename, 
        description: Edescription,
        owneruuid:Eportfolio_owner,
        status:Estatus,
       });
      handleClose()
      fetchPortfolio()
    }
  
  };

  const deleterow = async (uuid) => {
    const id = uuid;
    try {
      await axios.post("/api/deleterow/", { id: id });
      fetchPortfolio();
      // Handle the response from the server
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    }
  };
  const handleSetEname = (name) => {
    setEname(name);

  };
  const handleSetDes = (name) => {
    setdescription(name);
  };
  const handlestatus=(status)=>{
  setstatus(status)
  
  }
  const handleownername=(ownerdata)=>{
    setportfolio_ownerName(ownerdata.label)
    setportfolio_owner(ownerdata.uuid)
      }

  const editrow = async (uuid) => {
    const response = await axios.get(`/api/edit?id=${uuid}`);
    setuuid(uuid);
    setEname(response.data[0].name);
    setdescription(response.data[0].description);
    setstatus( response.data[0].status);
    setportfolio_owner(response.data[0].portfolio_owner)
    const responseOfOwner=await axios.get(`/api/ownername?id=${response.data[0].portfolio_owner}`)
    setportfolio_ownerName(responseOfOwner.data[0].label)
 
    handleOpen();

  
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
                    onClick={(e)=>setsearch(e.target.value)}
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

                  {isAscending ? (
                  <BsSortAlphaDown className="icon" onClick={handleSort} />
                        ) : (
                  <BsSortAlphaDownAlt className="icon" onClick={handleSort} />
                     )}  
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
              <DataTable data={data} deleterow={deleterow} editrow={editrow} search={search}  />
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
          editedData={editedData}
          Ename={Ename}
          Edescription={Edescription}
          Eportfolio_owner={Eportfolio_owner}
          Eportfolio_ownerName={Eportfolio_ownerName}
          Estatus={Estatus} 
          handleSetEname={handleSetEname}
          handlestatus={handlestatus}
          handleSetDes={handleSetDes}
          handleownername={handleownername}
          isAscending={isAscending} 
          handleSort={handleSort}
        />
      </div>
    </div>
  );
};

export default Home;
