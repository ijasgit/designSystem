import React, { useEffect, useState } from "react";
import "./NavBar.css";
import SearchBar from "../../Stories/Search Bar/SearchBar";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navto = useNavigate();
  const data = useSelector((state) => state.software.value[0].name);
  const [path, setPath] = useState(window.location.pathname);
  const tabName = useSelector((state) => state.routeLabel.value[0].name);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  const routenav = () => {
    // history.push('/path-to-component');
    navto("/home");
    console.log("routing");
  };

  return (
    <>
      <div className="nav-bar">
        <LibraryBooksOutlinedIcon className="library-icon" />
        <p id="pot-1">
          Portfolio Management{" "}
          <span id="span-1">
            {window.location.pathname == "/software" ? null : "/Portfolios"}
          </span>{" "}
          <span id="span-1">
            {data != "" && window.location.pathname == "/software" ? (
              <span>
                {" "}
                <span onClick={() => routenav()}> {" / " + data}</span>{" "}
                {" / " + tabName}
              </span>
            ) : null}
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
