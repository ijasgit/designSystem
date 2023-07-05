import React, { useEffect, useState } from "react";
import "./NavBar.css";
import SearchBar from "../../Stories/Search Bar/SearchBar";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useSelector } from "react-redux";

const NavBar = () => {
  const data = useSelector((state) => state.software.value[0].name);
  const [path, setPath] = useState(window.location.pathname);


  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);
  console.log(path);
  console.log(data, window.location.pathname);
  return (
    <>
      <div className="nav-bar">
        <LibraryBooksOutlinedIcon className="library-icon" />
        <p id="pot-1">
          Portfolio Management{" "}
          <span id="span-1">{window.location.pathname == "/software" ? null : "/Portfolios"}</span>{" "}
          <span id="span-1">
            {" "}
            {data != "" ? " / " + data + " / PPG" : null}
          </span>
        </p>

        <div
          style={{
            display: "flex",
            columnGap: "19px",
            marginTop: "11px",
            marginRight: "30px",
          }}
        >
          <SearchBar
            backgroundColor="#f3f3f3"
            borderRadius="4px"
            fontSize={15}
            height="22px"
            placeholder="Search"
            varient="small"
            width="125px"
          />
          <NotificationsTwoToneIcon className="notification-icon" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
