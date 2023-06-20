import React from "react";
import "./NavBar.css";  
import SearchBar from "../../Stories/Search Bar/SearchBar";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";



const NavBar = () => {
  return (
    <>

   <div className="nav-bar">

            <p id="pot-1">             
              <LibraryBooksOutlinedIcon  />
              Portfolio Management <span id="span-1"> / Portfolios</span>
              </p>
              
            <div style={{display: "flex",    columnGap: "19px",
    marginTop: "11px",
    marginRight: "30px"}}>
    
   
                <SearchBar
                  backgroundColor="#f3f3f3"
                  borderRadius="4px"
                  fontSize={15}
                  height="22px"
                  placeholder="Search"
                  varient="small"
                  width="125px"
                />
                 <NotificationsTwoToneIcon />

              </div>

              
  

        </div>

       
    
      
    </>
  );
};

export default NavBar;
