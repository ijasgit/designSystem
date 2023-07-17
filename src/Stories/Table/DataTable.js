import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
// import SearchBar from "../Search Bar/SearchBar";
import AddBtn from "../../Components/Add button -create new member/AddBtn";
// import { GiSettingsKnobs } from "react-icons/gi";
// import { TbShare2 } from "react-icons/tb";
// import { HiSortDescending } from "react-icons/hi";
import "../../Stories/Table/DataTable.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSoftware } from "../../Components/Featuers/SoftwareSlice";
import { useDispatch } from "react-redux";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../../Components/NavBar/NavBar.css";

const DataTable = (props) => {
  const childRef = useRef();
  const nav = useNavigate();

  const { variant = "primary", height, width, data, ...rest } = props;
  const [rows, setRows] = useState(data);

  // useEffect(() => {
  //   fetchPortfolio();

  // }, []);

  const check = (id, index) => {
    let data = rows.slice();
    data[index].show = !data[index].show;
    setRows(data);
  };

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get("/api/portfolio");
      setRows(response.data);

      console.log(response.data, "working");
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };

  const diapatch = useDispatch();

  const NavtoSoftware = (name) => {
    const Name = name;
    diapatch(
      addSoftware({
        name: Name,
      })
    );
    nav("/software");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 32px 21px 32px",
        }}
      >
        {/* <SearchBar /> */}
        <div style={{ display: "flex", columnGap: "32px" }}>
          {/* <div style={{ display: "flex", columnGap: "12px" }}>
            <GiSettingsKnobs className="icon" />
            <HiSortDescending className="icon" />
            <TbShare2 className="icon" />{" "}
          </div> */}
          <div
            style={{
              position: "relative",
              display: "flex",
            }}
          >
            <AddBtn ref={childRef} />
            <div
              style={{
                position: "absolute",
                paddingTop: "3px",
                left: "6px",
                cursor: "pointer",
              }}
              onClick={() => childRef.current.handleOpen()}
            >
              {/* <AddOutlinedIcon
                className="addout-1"
                fontSize="small"
              ></AddOutlinedIcon> */}
            </div>
          </div>
        </div>
      </div>
      {data && data.length && (
          <div style={{ width: "1161px", marginLeft: "31px",overflow: 'auto', maxHeight: '485px' }}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table"  >
                <TableHead>
                  <TableRow >
                    {/* <TableCell>
                      {" "}
                      <span style={{ marginLeft: "15px" }}>ID</span>
                    </TableCell> */}
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Created date</TableCell>
                    <TableCell align="right">Manager</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {/* <TableCell>
                        <div style={{ display: "flex" }}>
                          <TableCell>{row.id}</TableCell>
                        </div>
                      </TableCell> */}
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={() => NavtoSoftware(row.name)}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color:
                            row.status === "Active" ? "#15AC52" : "#C03767",
                        }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell align="right">
                        {row.create_date}
                      </TableCell>
                      <TableCell align="right">{row.manager}</TableCell>

                      <TableCell align="right">
                        {row.protein}
                        <MoreHorizIcon onClick={() => check(row.id, index)} />
                        {row.show ? (
                          <Paper>
                            <MenuList>
                              <MenuItem>Profile</MenuItem>
                              <MenuItem>My account</MenuItem>
                              <MenuItem>Logout</MenuItem>
                            </MenuList>
                          </Paper>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

      )}
    </div>
  );
};

export default DataTable;
