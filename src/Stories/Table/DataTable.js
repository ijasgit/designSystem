import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import SearchBar from "../Search Bar/SearchBar";
import AddBtn from "../../Components/Add button -create new member/AddBtn";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbShare2 } from "react-icons/tb";
import { HiSortDescending } from "react-icons/hi";
import "../../Stories/Table/DataTable.css";
import { useSelector } from "react-redux";

const DataTable = (props) => {
  const useselector=useSelector((state)=>state)
  console.log(useselector,"data")
  const { variant = "primary", height, width, ...rest } = props;
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Frozen yoghurt",
      status: 159,
      createdBy: 6.0,
      manager: 24,
   
      show: false,
    },
    
  ]);
  // const [show, setShow] = useState([{ index: false }]);
  const check = (id, index) => {
    let data = rows.slice();
    data[index].show = !data[index].show;
    setRows(data);
  };

  console.log(rows);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 32px 21px 32px",
        }}
      >
        <SearchBar />
        <div style={{ display: "flex", columnGap: "32px" }}>
          <div style={{ display: "flex", columnGap: "12px" }}>
            <GiSettingsKnobs className="icon" />
            <HiSortDescending className="icon" />
            <TbShare2 className="icon" />{" "}
          </div>
          <AddBtn />
        </div>
      </div>
      <div style={{ width: "1161px", marginLeft: "31px" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
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
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.createdBy}</TableCell>
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
    </div>
  );
};

export default DataTable;
