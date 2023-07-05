import React, { useEffect, useState } from "react";
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
import SearchBar from "../../../Stories/Search Bar/SearchBar";
import AddBtn from "../../Add button -create new member/AddBtn";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbShare2 } from "react-icons/tb";
import { HiSortDescending } from "react-icons/hi";
import "../../../Stories/Table/DataTable.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSoftware } from "../../Featuers/SoftwareSlice";
import { useDispatch } from "react-redux";
import CreateNewPortfolio from "../PPG/CreateNewPortfolio";
const DataTable = (props) => {
  const nav = useNavigate();
  const data = useSelector((state) => state.software.ppgDataTable);
  console.log(data,"softdata")
  const { variant = "primary", height, width, ...rest } = props;
  const [rows, setRows] = useState(data || []);

  useEffect(() => {
    console.log(data);
    setRows(data || []);
  }, [data]);

  const check = (id, index) => {
    let data = rows.slice();
    data[index].show = !data[index].show;
    setRows(data);
  };

  const diapatch= useDispatch ();

  const NavtoSoftware = (name) => {
    console.log(name)
    const Name=name
    diapatch(
      addSoftware({
       name:Name
      })
    );
    nav("/software")
  };
  return (
    <div>
     
      {rows && rows.length ? (
        <div style={{ width: "1161px", marginLeft: "31px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <span style={{ marginLeft: "15px" }}>ID</span>
                  </TableCell>
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
                    <TableCell>
                      <div style={{ display: "flex" }}>
                        <TableCell>{row.id}</TableCell>
                      </div>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={()=>NavtoSoftware(row.name)}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: row.status === "Active" ? "#15AC52" : "#C03767",
                      }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell align="right">
                      {row.date && row.date.toLocaleString()}
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
      ) : (
       <CreateNewPortfolio/>
      )}
    </div>
  );
};

export default DataTable;
